import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutWebhooksFirehoseSecurity extends SpeakeasyBase {
    clientAccessToken: string;
}
export declare class PutWebhooksFirehoseRequestBody extends SpeakeasyBase {
    /**
     * A cryptographically secure secret, generated and provided by your client
     */
    secret?: string;
    /**
     * The HTTPS url to which Enode should POST the event payload when a watched property changes
     */
    url?: string;
}
export declare class PutWebhooksFirehoseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
