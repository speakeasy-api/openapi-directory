import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorCountRequest } from "./acceleratorcountrequest";
import { AcceleratorTotalMemoryMiBRequest } from "./acceleratortotalmemorymibrequest";
import { BareMetalEnum } from "./baremetalenum";
import { BaselineEbsBandwidthMbpsRequest } from "./baselineebsbandwidthmbpsrequest";
import { BurstablePerformanceEnum } from "./burstableperformanceenum";
import { LocalStorageEnum } from "./localstorageenum";
import { MemoryGiBPerVCpuRequest } from "./memorygibpervcpurequest";
import { MemoryMiBRequest } from "./memorymibrequest";
import { NetworkBandwidthGbpsRequest } from "./networkbandwidthgbpsrequest";
import { NetworkInterfaceCountRequest } from "./networkinterfacecountrequest";
import { TotalLocalStorageGBRequest } from "./totallocalstoragegbrequest";
import { VCpuCountRangeRequest } from "./vcpucountrangerequest";
export declare enum InstanceRequirementsRequestAcceleratorManufacturersEnum {
    Nvidia = "nvidia",
    Amd = "amd",
    AmazonWebServices = "amazon-web-services",
    Xilinx = "xilinx"
}
export declare enum InstanceRequirementsRequestAcceleratorNamesEnum {
    A100 = "a100",
    V100 = "v100",
    K80 = "k80",
    T4 = "t4",
    M60 = "m60",
    RadeonProV520 = "radeon-pro-v520",
    Vu9p = "vu9p",
    Inferentia = "inferentia",
    K520 = "k520"
}
export declare enum InstanceRequirementsRequestAcceleratorTypesEnum {
    Gpu = "gpu",
    Fpga = "fpga",
    Inference = "inference"
}
export declare enum InstanceRequirementsRequestCpuManufacturersEnum {
    Intel = "intel",
    Amd = "amd",
    AmazonWebServices = "amazon-web-services"
}
export declare enum InstanceRequirementsRequestInstanceGenerationsEnum {
    Current = "current",
    Previous = "previous"
}
export declare enum InstanceRequirementsRequestLocalStorageTypesEnum {
    Hdd = "hdd",
    Ssd = "ssd"
}
/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.</p> <p>When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.</p> <p>To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:</p> <ul> <li> <p> <code>AllowedInstanceTypes</code> - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.</p> </li> <li> <p> <code>ExcludedInstanceTypes</code> - The instance types to exclude from the list, even if they match your specified attributes.</p> </li> </ul> <note> <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other attributes are optional. Any unspecified optional attribute is set to its default.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export declare class InstanceRequirementsRequest extends SpeakeasyBase {
    acceleratorCount?: AcceleratorCountRequest;
    acceleratorManufacturers?: InstanceRequirementsRequestAcceleratorManufacturersEnum[];
    acceleratorNames?: InstanceRequirementsRequestAcceleratorNamesEnum[];
    acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
    acceleratorTypes?: InstanceRequirementsRequestAcceleratorTypesEnum[];
    allowedInstanceTypes?: string[];
    bareMetal?: BareMetalEnum;
    baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
    burstablePerformance?: BurstablePerformanceEnum;
    cpuManufacturers?: InstanceRequirementsRequestCpuManufacturersEnum[];
    excludedInstanceTypes?: string[];
    instanceGenerations?: InstanceRequirementsRequestInstanceGenerationsEnum[];
    localStorage?: LocalStorageEnum;
    localStorageTypes?: InstanceRequirementsRequestLocalStorageTypesEnum[];
    memoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
    memoryMiB: MemoryMiBRequest;
    networkBandwidthGbps?: NetworkBandwidthGbpsRequest;
    networkInterfaceCount?: NetworkInterfaceCountRequest;
    onDemandMaxPricePercentageOverLowestPrice?: number;
    requireHibernateSupport?: boolean;
    spotMaxPricePercentageOverLowestPrice?: number;
    totalLocalStorageGB?: TotalLocalStorageGBRequest;
    vCpuCount: VCpuCountRangeRequest;
}
