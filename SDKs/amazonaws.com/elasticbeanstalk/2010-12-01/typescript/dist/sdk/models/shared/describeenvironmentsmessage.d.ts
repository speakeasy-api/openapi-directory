import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to describe one or more environments.
 */
export declare class DescribeEnvironmentsMessage extends SpeakeasyBase {
    applicationName?: string;
    environmentIds?: string[];
    environmentNames?: string[];
    includeDeleted?: boolean;
    includedDeletedBackTo?: Date;
    maxRecords?: number;
    nextToken?: string;
    versionLabel?: string;
}
