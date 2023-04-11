import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the ID format for a resource.
 */
export declare class DescribeAggregateIdFormatResultStatuses extends SpeakeasyBase {
    deadline?: Date;
    resource?: string;
    useLongIds?: boolean;
}
/**
 * Success
 */
export declare class DescribeAggregateIdFormatResult extends SpeakeasyBase {
    statuses?: DescribeAggregateIdFormatResultStatuses[];
    useLongIdsAggregated?: boolean;
}
