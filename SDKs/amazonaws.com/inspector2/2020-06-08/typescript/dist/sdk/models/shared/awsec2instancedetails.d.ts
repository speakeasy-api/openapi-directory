import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the Amazon EC2 instance involved in a finding.
 */
export declare class AwsEc2InstanceDetails extends SpeakeasyBase {
    iamInstanceProfileArn?: string;
    imageId?: string;
    ipV4Addresses?: string[];
    ipV6Addresses?: string[];
    keyName?: string;
    launchedAt?: Date;
    platform?: string;
    subnetId?: string;
    type?: string;
    vpcId?: string;
}
