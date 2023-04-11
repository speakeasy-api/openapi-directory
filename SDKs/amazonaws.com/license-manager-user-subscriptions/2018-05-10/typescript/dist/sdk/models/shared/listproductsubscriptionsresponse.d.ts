import { SpeakeasyBase } from "../../../internal/utils";
import { ProductUserSummary } from "./productusersummary";
/**
 * Success
 */
export declare class ListProductSubscriptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    productUserSummaries?: ProductUserSummary[];
}
