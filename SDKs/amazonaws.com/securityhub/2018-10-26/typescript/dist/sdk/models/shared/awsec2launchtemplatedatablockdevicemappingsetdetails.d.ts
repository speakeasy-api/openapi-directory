import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails } from "./awsec2launchtemplatedatablockdevicemappingsetebsdetails";
/**
 *  Information about a block device mapping for an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 */
export declare class AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails extends SpeakeasyBase {
    deviceName?: string;
    ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
    noDevice?: string;
    virtualName?: string;
}
