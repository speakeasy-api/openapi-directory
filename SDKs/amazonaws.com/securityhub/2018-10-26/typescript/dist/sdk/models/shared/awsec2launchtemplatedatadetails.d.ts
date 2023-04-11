import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails } from "./awsec2launchtemplatedatablockdevicemappingsetdetails";
import { AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails } from "./awsec2launchtemplatedatacapacityreservationspecificationdetails";
import { AwsEc2LaunchTemplateDataCpuOptionsDetails } from "./awsec2launchtemplatedatacpuoptionsdetails";
import { AwsEc2LaunchTemplateDataCreditSpecificationDetails } from "./awsec2launchtemplatedatacreditspecificationdetails";
import { AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails } from "./awsec2launchtemplatedataelasticgpuspecificationsetdetails";
import { AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails } from "./awsec2launchtemplatedataelasticinferenceacceleratorsetdetails";
import { AwsEc2LaunchTemplateDataEnclaveOptionsDetails } from "./awsec2launchtemplatedataenclaveoptionsdetails";
import { AwsEc2LaunchTemplateDataHibernationOptionsDetails } from "./awsec2launchtemplatedatahibernationoptionsdetails";
import { AwsEc2LaunchTemplateDataIamInstanceProfileDetails } from "./awsec2launchtemplatedataiaminstanceprofiledetails";
import { AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails } from "./awsec2launchtemplatedatainstancemarketoptionsdetails";
import { AwsEc2LaunchTemplateDataInstanceRequirementsDetails } from "./awsec2launchtemplatedatainstancerequirementsdetails";
import { AwsEc2LaunchTemplateDataLicenseSetDetails } from "./awsec2launchtemplatedatalicensesetdetails";
import { AwsEc2LaunchTemplateDataMaintenanceOptionsDetails } from "./awsec2launchtemplatedatamaintenanceoptionsdetails";
import { AwsEc2LaunchTemplateDataMetadataOptionsDetails } from "./awsec2launchtemplatedatametadataoptionsdetails";
import { AwsEc2LaunchTemplateDataMonitoringDetails } from "./awsec2launchtemplatedatamonitoringdetails";
import { AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails } from "./awsec2launchtemplatedatanetworkinterfacesetdetails";
import { AwsEc2LaunchTemplateDataPlacementDetails } from "./awsec2launchtemplatedataplacementdetails";
import { AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails } from "./awsec2launchtemplatedataprivatednsnameoptionsdetails";
/**
 *  The information to include in an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 */
export declare class AwsEc2LaunchTemplateDataDetails extends SpeakeasyBase {
    blockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];
    capacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
    cpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;
    creditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;
    disableApiStop?: boolean;
    disableApiTermination?: boolean;
    ebsOptimized?: boolean;
    elasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];
    elasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];
    enclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
    hibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;
    iamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
    imageId?: string;
    instanceInitiatedShutdownBehavior?: string;
    instanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
    instanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
    instanceType?: string;
    kernelId?: string;
    keyName?: string;
    licenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[];
    maintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
    metadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;
    monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;
    networkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];
    placement?: AwsEc2LaunchTemplateDataPlacementDetails;
    privateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
    ramDiskId?: string;
    securityGroupIdSet?: string[];
    securityGroupSet?: string[];
    userData?: string;
}
