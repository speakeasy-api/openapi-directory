import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallRecordingMp3Security extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallRecordingMp3Request extends SpeakeasyBase {
    /**
     * An id of a call
     */
    id: number;
}
export declare class GetCallRecordingMp3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    inputStream?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
