import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * On a successful response, returns an array of artifact IDs - one for each artifact
     *
     * @remarks
     * in the registry.
     */
    listArtifacts200ApplicationJSONStrings?: string[];
}
