import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeLogGroupsRequest extends SpeakeasyBase {
    accountIdentifiers?: string[];
    includeLinkedAccounts?: boolean;
    limit?: number;
    logGroupNamePattern?: string;
    logGroupNamePrefix?: string;
    nextToken?: string;
}
