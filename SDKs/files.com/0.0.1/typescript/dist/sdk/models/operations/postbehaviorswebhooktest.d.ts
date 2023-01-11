import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBehaviorsWebhookTestRequestBody extends SpeakeasyBase {
    action?: string;
    body?: Record<string, any>;
    encoding?: string;
    headers?: Record<string, any>;
    method?: string;
    url: string;
}
export declare class PostBehaviorsWebhookTestRequest extends SpeakeasyBase {
    request: PostBehaviorsWebhookTestRequestBody;
}
export declare class PostBehaviorsWebhookTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    statusEntity?: shared.StatusEntity;
}
