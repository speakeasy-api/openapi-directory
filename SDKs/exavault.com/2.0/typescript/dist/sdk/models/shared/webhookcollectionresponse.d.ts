import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
export declare class WebhookCollectionResponse extends SpeakeasyBase {
    data?: Webhook[];
    included?: any[];
    responseStatus?: number;
    returnedResults?: number;
    totalResults?: number;
}
