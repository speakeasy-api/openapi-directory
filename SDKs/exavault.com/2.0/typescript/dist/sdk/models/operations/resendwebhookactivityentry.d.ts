import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResendWebhookActivityEntryPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class ResendWebhookActivityEntryHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ResendWebhookActivityEntryRequest extends SpeakeasyBase {
    pathParams: ResendWebhookActivityEntryPathParams;
    headers: ResendWebhookActivityEntryHeaders;
}
export declare class ResendWebhookActivityEntryResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
