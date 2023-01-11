import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateWebhookHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare enum UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum {
    V2 = "v2",
    V1 = "v1"
}
export declare class UpdateWebhookUpdateWebhookRequestBody extends SpeakeasyBase {
    endpointUrl?: string;
    resource?: string;
    responseVersion?: UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum;
    triggers?: shared.WebhookTriggers;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateWebhookPathParams;
    headers: UpdateWebhookHeaders;
    request?: UpdateWebhookUpdateWebhookRequestBody;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
}
