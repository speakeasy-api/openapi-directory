import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendUploadShareLinkViaEmailRequest extends SpeakeasyBase {
    uploadShareLinkEmail: shared.UploadShareLinkEmail;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Share ID
     */
    shareId: number;
}
export declare class SendUploadShareLinkViaEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
