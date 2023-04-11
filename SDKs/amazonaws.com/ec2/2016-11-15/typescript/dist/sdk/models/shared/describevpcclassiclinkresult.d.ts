import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeVpcClassicLinkResultVpcsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Describes whether a VPC is enabled for ClassicLink.</p>
 */
export declare class DescribeVpcClassicLinkResultVpcs extends SpeakeasyBase {
    classicLinkEnabled?: boolean;
    tags?: DescribeVpcClassicLinkResultVpcsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcClassicLinkResult extends SpeakeasyBase {
    vpcs?: DescribeVpcClassicLinkResultVpcs[];
}
