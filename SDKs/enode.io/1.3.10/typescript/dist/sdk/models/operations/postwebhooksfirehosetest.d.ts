import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksFirehoseTestSecurity extends SpeakeasyBase {
    clientAccessToken: shared.SchemeClientAccessToken;
}
export declare class PostWebhooksFirehoseTestRequest extends SpeakeasyBase {
    security: PostWebhooksFirehoseTestSecurity;
}
export declare class PostWebhooksFirehoseTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postWebhooksFirehoseTestDefaultApplicationJSONString?: string;
}
