import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a security group.
 */
export declare class DescribeClassicLinkInstancesResultInstancesGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeClassicLinkInstancesResultInstancesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Describes a linked EC2-Classic instance.</p>
 */
export declare class DescribeClassicLinkInstancesResultInstances extends SpeakeasyBase {
    groups?: DescribeClassicLinkInstancesResultInstancesGroups[];
    instanceId?: string;
    tags?: DescribeClassicLinkInstancesResultInstancesTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeClassicLinkInstancesResult extends SpeakeasyBase {
    instances?: DescribeClassicLinkInstancesResultInstances[];
    nextToken?: string;
}
