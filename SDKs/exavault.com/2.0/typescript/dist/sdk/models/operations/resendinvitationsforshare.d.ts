import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResendInvitationsForSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class ResendInvitationsForShareHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ResendInvitationsForShareResendInvitationsRequestBody extends SpeakeasyBase {
    recipientId?: number;
}
export declare class ResendInvitationsForShareRequest extends SpeakeasyBase {
    pathParams: ResendInvitationsForSharePathParams;
    headers: ResendInvitationsForShareHeaders;
    request?: ResendInvitationsForShareResendInvitationsRequestBody;
}
export declare class ResendInvitationsForShareResponse extends SpeakeasyBase {
    contentType: string;
    shareRecipientsResponse?: shared.ShareRecipientsResponse;
    statusCode: number;
}
