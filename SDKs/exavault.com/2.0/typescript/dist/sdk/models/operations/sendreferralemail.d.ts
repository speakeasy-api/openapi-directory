import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendReferralEmailSendReferralEmailRequestBody extends SpeakeasyBase {
    emails: string[];
    message: string;
}
export declare class SendReferralEmailRequest extends SpeakeasyBase {
    requestBody?: SendReferralEmailSendReferralEmailRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class SendReferralEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
