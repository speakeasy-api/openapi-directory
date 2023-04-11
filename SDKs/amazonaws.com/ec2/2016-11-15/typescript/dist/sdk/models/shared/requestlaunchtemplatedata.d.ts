import { SpeakeasyBase } from "../../../internal/utils";
import { CreditSpecificationRequest } from "./creditspecificationrequest";
import { InstanceIpv6AddressListRequest } from "./instanceipv6addresslistrequest";
import { InstanceRequirementsRequest } from "./instancerequirementsrequest";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateCapacityReservationSpecificationRequest } from "./launchtemplatecapacityreservationspecificationrequest";
import { LaunchTemplateCpuOptionsRequest } from "./launchtemplatecpuoptionsrequest";
import { LaunchTemplateEbsBlockDeviceRequest } from "./launchtemplateebsblockdevicerequest";
import { LaunchTemplateEnclaveOptionsRequest } from "./launchtemplateenclaveoptionsrequest";
import { LaunchTemplateHibernationOptionsRequest } from "./launchtemplatehibernationoptionsrequest";
import { LaunchTemplateIamInstanceProfileSpecificationRequest } from "./launchtemplateiaminstanceprofilespecificationrequest";
import { LaunchTemplateInstanceMaintenanceOptionsRequest } from "./launchtemplateinstancemaintenanceoptionsrequest";
import { LaunchTemplateInstanceMarketOptionsRequest } from "./launchtemplateinstancemarketoptionsrequest";
import { LaunchTemplateInstanceMetadataOptionsRequest } from "./launchtemplateinstancemetadataoptionsrequest";
import { LaunchTemplatePlacementRequest } from "./launchtemplateplacementrequest";
import { LaunchTemplatePrivateDnsNameOptionsRequest } from "./launchtemplateprivatednsnameoptionsrequest";
import { LaunchTemplatesMonitoringRequest } from "./launchtemplatesmonitoringrequest";
import { PrivateIpAddressSpecificationList } from "./privateipaddressspecificationlist";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ShutdownBehaviorEnum } from "./shutdownbehaviorenum";
/**
 * Describes a block device mapping.
 */
export declare class RequestLaunchTemplateDataBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: LaunchTemplateEbsBlockDeviceRequest;
    noDevice?: string;
    virtualName?: string;
}
/**
 * A specification for an Elastic Graphics accelerator.
 */
export declare class RequestLaunchTemplateDataElasticGpuSpecifications extends SpeakeasyBase {
    type: string;
}
/**
 *  Describes an elastic inference accelerator.
 */
export declare class RequestLaunchTemplateDataElasticInferenceAccelerators extends SpeakeasyBase {
    count?: number;
    type: string;
}
/**
 * Describes a license configuration.
 */
export declare class RequestLaunchTemplateDataLicenseSpecifications extends SpeakeasyBase {
    licenseConfigurationArn?: string;
}
/**
 * Describes the IPv4 prefix option for a network interface.
 */
export declare class RequestLaunchTemplateDataNetworkInterfacesIpv4Prefixes extends SpeakeasyBase {
    ipv4Prefix?: string;
}
/**
 * Describes the IPv4 prefix option for a network interface.
 */
export declare class RequestLaunchTemplateDataNetworkInterfacesIpv6Prefixes extends SpeakeasyBase {
    ipv6Prefix?: string;
}
/**
 * The parameters for a network interface.
 */
export declare class RequestLaunchTemplateDataNetworkInterfaces extends SpeakeasyBase {
    associateCarrierIpAddress?: boolean;
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    interfaceType?: string;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: RequestLaunchTemplateDataNetworkInterfacesIpv4Prefixes[];
    ipv6AddressCount?: number;
    ipv6Addresses?: InstanceIpv6AddressListRequest[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: RequestLaunchTemplateDataNetworkInterfacesIpv6Prefixes[];
    networkCardIndex?: number;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddresses?: PrivateIpAddressSpecificationList[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
/**
 * Describes a tag.
 */
export declare class RequestLaunchTemplateDataTagSpecificationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The tags specification for the resources that are created during instance launch.
 */
export declare class RequestLaunchTemplateDataTagSpecifications extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    tags?: RequestLaunchTemplateDataTagSpecificationsTags[];
}
/**
 * <p>The information to include in the launch template.</p> <note> <p>You must specify at least one parameter for the launch template data.</p> </note>
 */
export declare class RequestLaunchTemplateData extends SpeakeasyBase {
    blockDeviceMappings?: RequestLaunchTemplateDataBlockDeviceMappings[];
    capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;
    cpuOptions?: LaunchTemplateCpuOptionsRequest;
    creditSpecification?: CreditSpecificationRequest;
    disableApiStop?: boolean;
    disableApiTermination?: boolean;
    ebsOptimized?: boolean;
    elasticGpuSpecifications?: RequestLaunchTemplateDataElasticGpuSpecifications[];
    elasticInferenceAccelerators?: RequestLaunchTemplateDataElasticInferenceAccelerators[];
    enclaveOptions?: LaunchTemplateEnclaveOptionsRequest;
    hibernationOptions?: LaunchTemplateHibernationOptionsRequest;
    iamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;
    imageId?: string;
    instanceInitiatedShutdownBehavior?: ShutdownBehaviorEnum;
    instanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;
    instanceRequirements?: InstanceRequirementsRequest;
    instanceType?: InstanceTypeEnum;
    kernelId?: string;
    keyName?: string;
    licenseSpecifications?: RequestLaunchTemplateDataLicenseSpecifications[];
    maintenanceOptions?: LaunchTemplateInstanceMaintenanceOptionsRequest;
    metadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;
    monitoring?: LaunchTemplatesMonitoringRequest;
    networkInterfaces?: RequestLaunchTemplateDataNetworkInterfaces[];
    placement?: LaunchTemplatePlacementRequest;
    privateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest;
    ramDiskId?: string;
    securityGroupIds?: string[];
    securityGroups?: string[];
    tagSpecifications?: RequestLaunchTemplateDataTagSpecifications[];
    userData?: string;
}
