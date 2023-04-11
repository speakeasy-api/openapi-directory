import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetArtifactByGlobalIdRequest extends SpeakeasyBase {
    /**
     * Global identifier for an artifact version.
     */
    globalId: number;
}
export declare class GetArtifactByGlobalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
