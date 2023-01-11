import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegenerateWebhookTokenPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RegenerateWebhookTokenHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class RegenerateWebhookTokenRequest extends SpeakeasyBase {
    pathParams: RegenerateWebhookTokenPathParams;
    headers: RegenerateWebhookTokenHeaders;
}
export declare class RegenerateWebhookTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
}
