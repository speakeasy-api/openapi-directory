import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceMetadataOptions } from "./awsec2instancemetadataoptions";
import { AwsEc2InstanceMonitoringDetails } from "./awsec2instancemonitoringdetails";
import { AwsEc2InstanceNetworkInterfacesDetails } from "./awsec2instancenetworkinterfacesdetails";
/**
 * The details of an Amazon EC2 instance.
 */
export declare class AwsEc2InstanceDetails extends SpeakeasyBase {
    iamInstanceProfileArn?: string;
    imageId?: string;
    ipV4Addresses?: string[];
    ipV6Addresses?: string[];
    keyName?: string;
    launchedAt?: string;
    metadataOptions?: AwsEc2InstanceMetadataOptions;
    monitoring?: AwsEc2InstanceMonitoringDetails;
    networkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];
    subnetId?: string;
    type?: string;
    virtualizationType?: string;
    vpcId?: string;
}
