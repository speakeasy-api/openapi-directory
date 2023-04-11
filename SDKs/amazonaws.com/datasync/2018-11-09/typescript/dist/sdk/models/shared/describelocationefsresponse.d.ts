import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";
import { EfsInTransitEncryptionEnum } from "./efsintransitencryptionenum";
/**
 * DescribeLocationEfsResponse
 */
export declare class DescribeLocationEfsResponse extends SpeakeasyBase {
    accessPointArn?: string;
    creationTime?: Date;
    /**
     * The subnet and security groups that DataSync uses to access your Amazon EFS file system.
     */
    ec2Config?: Ec2Config;
    fileSystemAccessRoleArn?: string;
    inTransitEncryption?: EfsInTransitEncryptionEnum;
    locationArn?: string;
    locationUri?: string;
}
