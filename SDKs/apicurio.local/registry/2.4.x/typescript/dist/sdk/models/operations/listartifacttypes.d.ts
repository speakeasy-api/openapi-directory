import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactTypesResponse extends SpeakeasyBase {
    /**
     * The list of available artifact types.
     */
    artifactTypeInfos?: shared.ArtifactTypeInfo[];
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
