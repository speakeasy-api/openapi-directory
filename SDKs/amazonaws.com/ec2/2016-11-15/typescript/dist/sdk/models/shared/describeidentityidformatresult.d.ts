import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the ID format for a resource.
 */
export declare class DescribeIdentityIdFormatResultStatuses extends SpeakeasyBase {
    deadline?: Date;
    resource?: string;
    useLongIds?: boolean;
}
/**
 * Success
 */
export declare class DescribeIdentityIdFormatResult extends SpeakeasyBase {
    statuses?: DescribeIdentityIdFormatResultStatuses[];
}
