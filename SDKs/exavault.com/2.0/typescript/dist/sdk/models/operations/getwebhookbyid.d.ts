import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetWebhookByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetWebhookByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetWebhookByIdRequest extends SpeakeasyBase {
    pathParams: GetWebhookByIdPathParams;
    queryParams: GetWebhookByIdQueryParams;
    headers: GetWebhookByIdHeaders;
}
export declare class GetWebhookByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
}
