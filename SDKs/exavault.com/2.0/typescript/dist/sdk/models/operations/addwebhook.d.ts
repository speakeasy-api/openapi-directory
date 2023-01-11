import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddWebhookHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare enum AddWebhookAddWebhookRequestBodyResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare class AddWebhookAddWebhookRequestBody extends SpeakeasyBase {
    endpointUrl: string;
    resource?: string;
    responseVersion?: AddWebhookAddWebhookRequestBodyResponseVersionEnum;
    triggers?: shared.WebhookTriggers;
}
export declare class AddWebhookRequest extends SpeakeasyBase {
    headers: AddWebhookHeaders;
    request?: AddWebhookAddWebhookRequestBody;
}
export declare class AddWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
}
