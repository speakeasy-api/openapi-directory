import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>The VPC peering connection options.</p>
 */
export declare class PeeringConnectionOptionsRequest extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
