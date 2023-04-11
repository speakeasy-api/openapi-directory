import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
/**
 * Represents the input to <a>DescribeEventSubscriptions</a>.
 */
export declare class DescribeEventSubscriptionsMessage extends SpeakeasyBase {
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
}
