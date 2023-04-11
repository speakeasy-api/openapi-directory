import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
/**
 * Created
 */
export declare class WebhookResponse extends SpeakeasyBase {
    data?: Webhook[];
    included?: any[];
    /**
     * Http status code of the response.
     */
    responseStatus?: number;
}
