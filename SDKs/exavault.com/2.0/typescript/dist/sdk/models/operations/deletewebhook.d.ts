import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteWebhookHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteWebhookPathParams;
    headers: DeleteWebhookHeaders;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
