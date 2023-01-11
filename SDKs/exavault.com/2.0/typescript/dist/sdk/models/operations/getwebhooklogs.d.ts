import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookLogsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    endpointUrl?: string;
    event?: string;
    limit?: number;
    offset?: number;
    resourcePath?: string;
    sort?: string;
    startDate?: Date;
    statusCode?: number;
    username?: string;
}
export declare class GetWebhookLogsHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetWebhookLogsRequest extends SpeakeasyBase {
    queryParams: GetWebhookLogsQueryParams;
    headers: GetWebhookLogsHeaders;
}
export declare class GetWebhookLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookActivityResponse?: shared.WebhookActivityResponse;
}
