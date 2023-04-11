import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subnet and security groups that DataSync uses to access your Amazon EFS file system.
 */
export declare class Ec2Config extends SpeakeasyBase {
    securityGroupArns: string[];
    subnetArn: string;
}
