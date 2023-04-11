import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.
 */
export declare enum DescribeMovingAddressesResultMovingAddressStatusesMoveStatusEnum {
    MovingToVpc = "movingToVpc",
    RestoringToClassic = "restoringToClassic"
}
/**
 * <p>Describes the status of a moving Elastic IP address.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
 */
export declare class DescribeMovingAddressesResultMovingAddressStatuses extends SpeakeasyBase {
    moveStatus?: DescribeMovingAddressesResultMovingAddressStatusesMoveStatusEnum;
    publicIp?: string;
}
/**
 * Success
 */
export declare class DescribeMovingAddressesResult extends SpeakeasyBase {
    movingAddressStatuses?: DescribeMovingAddressesResultMovingAddressStatuses[];
    nextToken?: string;
}
