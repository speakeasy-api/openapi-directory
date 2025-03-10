import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeEventSubscriptionsMessage extends SpeakeasyBase {
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
}
