import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetUserFileKeysRequest extends SpeakeasyBase {
    userFileKeySetBatchRequest: shared.UserFileKeySetBatchRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SetUserFileKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
