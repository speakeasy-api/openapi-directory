import { SpeakeasyBase } from "../../../internal/utils";
import { LogSubscription } from "./logsubscription";
/**
 * Success
 */
export declare class ListLogSubscriptionsResult extends SpeakeasyBase {
    logSubscriptions?: LogSubscription[];
    nextToken?: string;
}
