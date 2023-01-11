import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendWelcomeEmailPathParams extends SpeakeasyBase {
    username: string;
}
export declare class SendWelcomeEmailHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class SendWelcomeEmailRequest extends SpeakeasyBase {
    pathParams: SendWelcomeEmailPathParams;
    headers: SendWelcomeEmailHeaders;
}
export declare class SendWelcomeEmailResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
