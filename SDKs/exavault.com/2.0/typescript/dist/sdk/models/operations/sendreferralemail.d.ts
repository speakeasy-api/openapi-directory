import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendReferralEmailHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class SendReferralEmailSendReferralEmailRequestBody extends SpeakeasyBase {
    emails: string[];
    message: string;
}
export declare class SendReferralEmailRequest extends SpeakeasyBase {
    headers: SendReferralEmailHeaders;
    request?: SendReferralEmailSendReferralEmailRequestBody;
}
export declare class SendReferralEmailResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
