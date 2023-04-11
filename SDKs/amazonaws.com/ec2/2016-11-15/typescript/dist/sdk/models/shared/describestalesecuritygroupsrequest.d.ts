import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeStaleSecurityGroupsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    vpcId: string;
}
