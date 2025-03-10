import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeUploadShareRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Share ID
     */
    shareId: number;
}
export declare class UnsubscribeUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
