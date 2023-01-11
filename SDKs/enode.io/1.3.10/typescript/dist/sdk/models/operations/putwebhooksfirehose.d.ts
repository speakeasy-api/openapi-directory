import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWebhooksFirehoseRequestBody extends SpeakeasyBase {
    secret?: string;
    url?: string;
}
export declare class PutWebhooksFirehoseSecurity extends SpeakeasyBase {
    clientAccessToken: shared.SchemeClientAccessToken;
}
export declare class PutWebhooksFirehoseRequest extends SpeakeasyBase {
    request?: PutWebhooksFirehoseRequestBody;
    security: PutWebhooksFirehoseSecurity;
}
export declare class PutWebhooksFirehoseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
