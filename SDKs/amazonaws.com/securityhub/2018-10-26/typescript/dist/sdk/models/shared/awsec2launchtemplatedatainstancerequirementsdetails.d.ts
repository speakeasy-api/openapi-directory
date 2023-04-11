import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails } from "./awsec2launchtemplatedatainstancerequirementsacceleratorcountdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails } from "./awsec2launchtemplatedatainstancerequirementsacceleratortotalmemorymibdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails } from "./awsec2launchtemplatedatainstancerequirementsbaselineebsbandwidthmbpsdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails } from "./awsec2launchtemplatedatainstancerequirementsmemorygibpervcpudetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails } from "./awsec2launchtemplatedatainstancerequirementsmemorymibdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails } from "./awsec2launchtemplatedatainstancerequirementsnetworkinterfacecountdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails } from "./awsec2launchtemplatedatainstancerequirementstotallocalstoragegbdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails } from "./awsec2launchtemplatedatainstancerequirementsvcpucountdetails";
/**
 *  The attributes for the Amazon EC2 instance types.
 */
export declare class AwsEc2LaunchTemplateDataInstanceRequirementsDetails extends SpeakeasyBase {
    acceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
    acceleratorManufacturers?: string[];
    acceleratorNames?: string[];
    acceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
    acceleratorTypes?: string[];
    bareMetal?: string;
    baselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
    burstablePerformance?: string;
    cpuManufacturers?: string[];
    excludedInstanceTypes?: string[];
    instanceGenerations?: string[];
    localStorage?: string;
    localStorageTypes?: string[];
    memoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
    memoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
    networkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
    onDemandMaxPricePercentageOverLowestPrice?: number;
    requireHibernateSupport?: boolean;
    spotMaxPricePercentageOverLowestPrice?: number;
    totalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
    vCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
}
