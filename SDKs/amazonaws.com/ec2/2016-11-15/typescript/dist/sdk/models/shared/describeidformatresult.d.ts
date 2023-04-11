import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the ID format for a resource.
 */
export declare class DescribeIdFormatResultStatuses extends SpeakeasyBase {
    deadline?: Date;
    resource?: string;
    useLongIds?: boolean;
}
/**
 * Success
 */
export declare class DescribeIdFormatResult extends SpeakeasyBase {
    statuses?: DescribeIdFormatResultStatuses[];
}
