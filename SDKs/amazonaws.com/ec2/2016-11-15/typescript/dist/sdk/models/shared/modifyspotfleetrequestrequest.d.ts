import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Indicates whether running instances should be terminated if the target capacity of the Spot Fleet request is decreased below the current size of the Spot Fleet.</p> <p>Supported only for fleets of type <code>maintain</code>.</p>
 */
export declare enum ModifySpotFleetRequestRequestExcessCapacityTerminationPolicyEnum {
    NoTermination = "noTermination",
    Default = "default"
}
/**
 * The launch template.
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsLaunchTemplateSpecification extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version?: string;
}
/**
 * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance.</p> <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount extends SpeakeasyBase {
    max?: number;
    min?: number;
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorManufacturersEnum {
    Nvidia = "nvidia",
    Amd = "amd",
    AmazonWebServices = "amazon-web-services",
    Xilinx = "xilinx"
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorNamesEnum {
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
/**
 * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB extends SpeakeasyBase {
    max?: number;
    min?: number;
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTypesEnum {
    Gpu = "gpu",
    Fpga = "fpga",
    Inference = "inference"
}
/**
 * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p> <ul> <li> <p>To include bare metal instance types, specify <code>included</code>.</p> </li> <li> <p>To require only bare metal instance types, specify <code>required</code>.</p> </li> <li> <p>To exclude bare metal instance types, specify <code>excluded</code>.</p> </li> </ul> <p>Default: <code>excluded</code> </p>
 */
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBareMetalEnum {
    Included = "included",
    Required = "required",
    Excluded = "excluded"
}
/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p> <ul> <li> <p>To include burstable performance instance types, specify <code>included</code>.</p> </li> <li> <p>To require only burstable performance instance types, specify <code>required</code>.</p> </li> <li> <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p> </li> </ul> <p>Default: <code>excluded</code> </p>
 */
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBurstablePerformanceEnum {
    Included = "included",
    Required = "required",
    Excluded = "excluded"
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsCpuManufacturersEnum {
    Intel = "intel",
    Amd = "amd",
    AmazonWebServices = "amazon-web-services"
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsInstanceGenerationsEnum {
    Current = "current",
    Previous = "previous"
}
/**
 * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p> <ul> <li> <p>To include instance types with instance store volumes, specify <code>included</code>.</p> </li> <li> <p>To require only instance types with instance store volumes, specify <code>required</code>.</p> </li> <li> <p>To exclude instance types with instance store volumes, specify <code>excluded</code>.</p> </li> </ul> <p>Default: <code>included</code> </p>
 */
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsLocalStorageEnum {
    Included = "included",
    Required = "required",
    Excluded = "excluded"
}
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsLocalStorageTypesEnum {
    Hdd = "hdd",
    Ssd = "ssd"
}
/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * The minimum and maximum amount of memory, in MiB.
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * <p>The minimum and maximum number of network interfaces.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p> <p>Default: No minimum or maximum limits</p>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGB extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * The minimum and maximum number of vCPUs.
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * <p>The instance requirements. When you specify instance requirements, Amazon EC2 will identify instance types with the provided requirements, and then use your On-Demand and Spot allocation strategies to launch instances from these instance types, in the same way as when you specify a list of instance types.</p> <note> <p>If you specify <code>InstanceRequirements</code>, you can't specify <code>InstanceType</code>.</p> </note>
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirements extends SpeakeasyBase {
    acceleratorCount?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount;
    acceleratorManufacturers?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorManufacturersEnum[];
    acceleratorNames?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorNamesEnum[];
    acceleratorTotalMemoryMiB?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB;
    acceleratorTypes?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTypesEnum[];
    allowedInstanceTypes?: string[];
    bareMetal?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBareMetalEnum;
    baselineEbsBandwidthMbps?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps;
    burstablePerformance?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsBurstablePerformanceEnum;
    cpuManufacturers?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsCpuManufacturersEnum[];
    excludedInstanceTypes?: string[];
    instanceGenerations?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsInstanceGenerationsEnum[];
    localStorage?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsLocalStorageEnum;
    localStorageTypes?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsLocalStorageTypesEnum[];
    memoryGiBPerVCpu?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu;
    memoryMiB?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB;
    networkBandwidthGbps?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps;
    networkInterfaceCount?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount;
    onDemandMaxPricePercentageOverLowestPrice?: number;
    requireHibernateSupport?: boolean;
    spotMaxPricePercentageOverLowestPrice?: number;
    totalLocalStorageGB?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGB;
    vCpuCount?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount;
}
/**
 * The instance type.
 */
export declare enum ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceTypeEnum {
    A1Medium = "a1.medium",
    A1Large = "a1.large",
    A1Xlarge = "a1.xlarge",
    A12xlarge = "a1.2xlarge",
    A14xlarge = "a1.4xlarge",
    A1Metal = "a1.metal",
    C1Medium = "c1.medium",
    C1Xlarge = "c1.xlarge",
    C3Large = "c3.large",
    C3Xlarge = "c3.xlarge",
    C32xlarge = "c3.2xlarge",
    C34xlarge = "c3.4xlarge",
    C38xlarge = "c3.8xlarge",
    C4Large = "c4.large",
    C4Xlarge = "c4.xlarge",
    C42xlarge = "c4.2xlarge",
    C44xlarge = "c4.4xlarge",
    C48xlarge = "c4.8xlarge",
    C5Large = "c5.large",
    C5Xlarge = "c5.xlarge",
    C52xlarge = "c5.2xlarge",
    C54xlarge = "c5.4xlarge",
    C59xlarge = "c5.9xlarge",
    C512xlarge = "c5.12xlarge",
    C518xlarge = "c5.18xlarge",
    C524xlarge = "c5.24xlarge",
    C5Metal = "c5.metal",
    C5aLarge = "c5a.large",
    C5aXlarge = "c5a.xlarge",
    C5a2xlarge = "c5a.2xlarge",
    C5a4xlarge = "c5a.4xlarge",
    C5a8xlarge = "c5a.8xlarge",
    C5a12xlarge = "c5a.12xlarge",
    C5a16xlarge = "c5a.16xlarge",
    C5a24xlarge = "c5a.24xlarge",
    C5adLarge = "c5ad.large",
    C5adXlarge = "c5ad.xlarge",
    C5ad2xlarge = "c5ad.2xlarge",
    C5ad4xlarge = "c5ad.4xlarge",
    C5ad8xlarge = "c5ad.8xlarge",
    C5ad12xlarge = "c5ad.12xlarge",
    C5ad16xlarge = "c5ad.16xlarge",
    C5ad24xlarge = "c5ad.24xlarge",
    C5dLarge = "c5d.large",
    C5dXlarge = "c5d.xlarge",
    C5d2xlarge = "c5d.2xlarge",
    C5d4xlarge = "c5d.4xlarge",
    C5d9xlarge = "c5d.9xlarge",
    C5d12xlarge = "c5d.12xlarge",
    C5d18xlarge = "c5d.18xlarge",
    C5d24xlarge = "c5d.24xlarge",
    C5dMetal = "c5d.metal",
    C5nLarge = "c5n.large",
    C5nXlarge = "c5n.xlarge",
    C5n2xlarge = "c5n.2xlarge",
    C5n4xlarge = "c5n.4xlarge",
    C5n9xlarge = "c5n.9xlarge",
    C5n18xlarge = "c5n.18xlarge",
    C5nMetal = "c5n.metal",
    C6gMedium = "c6g.medium",
    C6gLarge = "c6g.large",
    C6gXlarge = "c6g.xlarge",
    C6g2xlarge = "c6g.2xlarge",
    C6g4xlarge = "c6g.4xlarge",
    C6g8xlarge = "c6g.8xlarge",
    C6g12xlarge = "c6g.12xlarge",
    C6g16xlarge = "c6g.16xlarge",
    C6gMetal = "c6g.metal",
    C6gdMedium = "c6gd.medium",
    C6gdLarge = "c6gd.large",
    C6gdXlarge = "c6gd.xlarge",
    C6gd2xlarge = "c6gd.2xlarge",
    C6gd4xlarge = "c6gd.4xlarge",
    C6gd8xlarge = "c6gd.8xlarge",
    C6gd12xlarge = "c6gd.12xlarge",
    C6gd16xlarge = "c6gd.16xlarge",
    C6gdMetal = "c6gd.metal",
    C6gnMedium = "c6gn.medium",
    C6gnLarge = "c6gn.large",
    C6gnXlarge = "c6gn.xlarge",
    C6gn2xlarge = "c6gn.2xlarge",
    C6gn4xlarge = "c6gn.4xlarge",
    C6gn8xlarge = "c6gn.8xlarge",
    C6gn12xlarge = "c6gn.12xlarge",
    C6gn16xlarge = "c6gn.16xlarge",
    C6iLarge = "c6i.large",
    C6iXlarge = "c6i.xlarge",
    C6i2xlarge = "c6i.2xlarge",
    C6i4xlarge = "c6i.4xlarge",
    C6i8xlarge = "c6i.8xlarge",
    C6i12xlarge = "c6i.12xlarge",
    C6i16xlarge = "c6i.16xlarge",
    C6i24xlarge = "c6i.24xlarge",
    C6i32xlarge = "c6i.32xlarge",
    C6iMetal = "c6i.metal",
    Cc14xlarge = "cc1.4xlarge",
    Cc28xlarge = "cc2.8xlarge",
    Cg14xlarge = "cg1.4xlarge",
    Cr18xlarge = "cr1.8xlarge",
    D2Xlarge = "d2.xlarge",
    D22xlarge = "d2.2xlarge",
    D24xlarge = "d2.4xlarge",
    D28xlarge = "d2.8xlarge",
    D3Xlarge = "d3.xlarge",
    D32xlarge = "d3.2xlarge",
    D34xlarge = "d3.4xlarge",
    D38xlarge = "d3.8xlarge",
    D3enXlarge = "d3en.xlarge",
    D3en2xlarge = "d3en.2xlarge",
    D3en4xlarge = "d3en.4xlarge",
    D3en6xlarge = "d3en.6xlarge",
    D3en8xlarge = "d3en.8xlarge",
    D3en12xlarge = "d3en.12xlarge",
    Dl124xlarge = "dl1.24xlarge",
    F12xlarge = "f1.2xlarge",
    F14xlarge = "f1.4xlarge",
    F116xlarge = "f1.16xlarge",
    G22xlarge = "g2.2xlarge",
    G28xlarge = "g2.8xlarge",
    G34xlarge = "g3.4xlarge",
    G38xlarge = "g3.8xlarge",
    G316xlarge = "g3.16xlarge",
    G3sXlarge = "g3s.xlarge",
    G4adXlarge = "g4ad.xlarge",
    G4ad2xlarge = "g4ad.2xlarge",
    G4ad4xlarge = "g4ad.4xlarge",
    G4ad8xlarge = "g4ad.8xlarge",
    G4ad16xlarge = "g4ad.16xlarge",
    G4dnXlarge = "g4dn.xlarge",
    G4dn2xlarge = "g4dn.2xlarge",
    G4dn4xlarge = "g4dn.4xlarge",
    G4dn8xlarge = "g4dn.8xlarge",
    G4dn12xlarge = "g4dn.12xlarge",
    G4dn16xlarge = "g4dn.16xlarge",
    G4dnMetal = "g4dn.metal",
    G5Xlarge = "g5.xlarge",
    G52xlarge = "g5.2xlarge",
    G54xlarge = "g5.4xlarge",
    G58xlarge = "g5.8xlarge",
    G512xlarge = "g5.12xlarge",
    G516xlarge = "g5.16xlarge",
    G524xlarge = "g5.24xlarge",
    G548xlarge = "g5.48xlarge",
    G5gXlarge = "g5g.xlarge",
    G5g2xlarge = "g5g.2xlarge",
    G5g4xlarge = "g5g.4xlarge",
    G5g8xlarge = "g5g.8xlarge",
    G5g16xlarge = "g5g.16xlarge",
    G5gMetal = "g5g.metal",
    Hi14xlarge = "hi1.4xlarge",
    Hpc6a48xlarge = "hpc6a.48xlarge",
    Hs18xlarge = "hs1.8xlarge",
    H12xlarge = "h1.2xlarge",
    H14xlarge = "h1.4xlarge",
    H18xlarge = "h1.8xlarge",
    H116xlarge = "h1.16xlarge",
    I2Xlarge = "i2.xlarge",
    I22xlarge = "i2.2xlarge",
    I24xlarge = "i2.4xlarge",
    I28xlarge = "i2.8xlarge",
    I3Large = "i3.large",
    I3Xlarge = "i3.xlarge",
    I32xlarge = "i3.2xlarge",
    I34xlarge = "i3.4xlarge",
    I38xlarge = "i3.8xlarge",
    I316xlarge = "i3.16xlarge",
    I3Metal = "i3.metal",
    I3enLarge = "i3en.large",
    I3enXlarge = "i3en.xlarge",
    I3en2xlarge = "i3en.2xlarge",
    I3en3xlarge = "i3en.3xlarge",
    I3en6xlarge = "i3en.6xlarge",
    I3en12xlarge = "i3en.12xlarge",
    I3en24xlarge = "i3en.24xlarge",
    I3enMetal = "i3en.metal",
    Im4gnLarge = "im4gn.large",
    Im4gnXlarge = "im4gn.xlarge",
    Im4gn2xlarge = "im4gn.2xlarge",
    Im4gn4xlarge = "im4gn.4xlarge",
    Im4gn8xlarge = "im4gn.8xlarge",
    Im4gn16xlarge = "im4gn.16xlarge",
    Inf1Xlarge = "inf1.xlarge",
    Inf12xlarge = "inf1.2xlarge",
    Inf16xlarge = "inf1.6xlarge",
    Inf124xlarge = "inf1.24xlarge",
    Is4genMedium = "is4gen.medium",
    Is4genLarge = "is4gen.large",
    Is4genXlarge = "is4gen.xlarge",
    Is4gen2xlarge = "is4gen.2xlarge",
    Is4gen4xlarge = "is4gen.4xlarge",
    Is4gen8xlarge = "is4gen.8xlarge",
    M1Small = "m1.small",
    M1Medium = "m1.medium",
    M1Large = "m1.large",
    M1Xlarge = "m1.xlarge",
    M2Xlarge = "m2.xlarge",
    M22xlarge = "m2.2xlarge",
    M24xlarge = "m2.4xlarge",
    M3Medium = "m3.medium",
    M3Large = "m3.large",
    M3Xlarge = "m3.xlarge",
    M32xlarge = "m3.2xlarge",
    M4Large = "m4.large",
    M4Xlarge = "m4.xlarge",
    M42xlarge = "m4.2xlarge",
    M44xlarge = "m4.4xlarge",
    M410xlarge = "m4.10xlarge",
    M416xlarge = "m4.16xlarge",
    M5Large = "m5.large",
    M5Xlarge = "m5.xlarge",
    M52xlarge = "m5.2xlarge",
    M54xlarge = "m5.4xlarge",
    M58xlarge = "m5.8xlarge",
    M512xlarge = "m5.12xlarge",
    M516xlarge = "m5.16xlarge",
    M524xlarge = "m5.24xlarge",
    M5Metal = "m5.metal",
    M5aLarge = "m5a.large",
    M5aXlarge = "m5a.xlarge",
    M5a2xlarge = "m5a.2xlarge",
    M5a4xlarge = "m5a.4xlarge",
    M5a8xlarge = "m5a.8xlarge",
    M5a12xlarge = "m5a.12xlarge",
    M5a16xlarge = "m5a.16xlarge",
    M5a24xlarge = "m5a.24xlarge",
    M5adLarge = "m5ad.large",
    M5adXlarge = "m5ad.xlarge",
    M5ad2xlarge = "m5ad.2xlarge",
    M5ad4xlarge = "m5ad.4xlarge",
    M5ad8xlarge = "m5ad.8xlarge",
    M5ad12xlarge = "m5ad.12xlarge",
    M5ad16xlarge = "m5ad.16xlarge",
    M5ad24xlarge = "m5ad.24xlarge",
    M5dLarge = "m5d.large",
    M5dXlarge = "m5d.xlarge",
    M5d2xlarge = "m5d.2xlarge",
    M5d4xlarge = "m5d.4xlarge",
    M5d8xlarge = "m5d.8xlarge",
    M5d12xlarge = "m5d.12xlarge",
    M5d16xlarge = "m5d.16xlarge",
    M5d24xlarge = "m5d.24xlarge",
    M5dMetal = "m5d.metal",
    M5dnLarge = "m5dn.large",
    M5dnXlarge = "m5dn.xlarge",
    M5dn2xlarge = "m5dn.2xlarge",
    M5dn4xlarge = "m5dn.4xlarge",
    M5dn8xlarge = "m5dn.8xlarge",
    M5dn12xlarge = "m5dn.12xlarge",
    M5dn16xlarge = "m5dn.16xlarge",
    M5dn24xlarge = "m5dn.24xlarge",
    M5dnMetal = "m5dn.metal",
    M5nLarge = "m5n.large",
    M5nXlarge = "m5n.xlarge",
    M5n2xlarge = "m5n.2xlarge",
    M5n4xlarge = "m5n.4xlarge",
    M5n8xlarge = "m5n.8xlarge",
    M5n12xlarge = "m5n.12xlarge",
    M5n16xlarge = "m5n.16xlarge",
    M5n24xlarge = "m5n.24xlarge",
    M5nMetal = "m5n.metal",
    M5znLarge = "m5zn.large",
    M5znXlarge = "m5zn.xlarge",
    M5zn2xlarge = "m5zn.2xlarge",
    M5zn3xlarge = "m5zn.3xlarge",
    M5zn6xlarge = "m5zn.6xlarge",
    M5zn12xlarge = "m5zn.12xlarge",
    M5znMetal = "m5zn.metal",
    M6aLarge = "m6a.large",
    M6aXlarge = "m6a.xlarge",
    M6a2xlarge = "m6a.2xlarge",
    M6a4xlarge = "m6a.4xlarge",
    M6a8xlarge = "m6a.8xlarge",
    M6a12xlarge = "m6a.12xlarge",
    M6a16xlarge = "m6a.16xlarge",
    M6a24xlarge = "m6a.24xlarge",
    M6a32xlarge = "m6a.32xlarge",
    M6a48xlarge = "m6a.48xlarge",
    M6gMetal = "m6g.metal",
    M6gMedium = "m6g.medium",
    M6gLarge = "m6g.large",
    M6gXlarge = "m6g.xlarge",
    M6g2xlarge = "m6g.2xlarge",
    M6g4xlarge = "m6g.4xlarge",
    M6g8xlarge = "m6g.8xlarge",
    M6g12xlarge = "m6g.12xlarge",
    M6g16xlarge = "m6g.16xlarge",
    M6gdMetal = "m6gd.metal",
    M6gdMedium = "m6gd.medium",
    M6gdLarge = "m6gd.large",
    M6gdXlarge = "m6gd.xlarge",
    M6gd2xlarge = "m6gd.2xlarge",
    M6gd4xlarge = "m6gd.4xlarge",
    M6gd8xlarge = "m6gd.8xlarge",
    M6gd12xlarge = "m6gd.12xlarge",
    M6gd16xlarge = "m6gd.16xlarge",
    M6iLarge = "m6i.large",
    M6iXlarge = "m6i.xlarge",
    M6i2xlarge = "m6i.2xlarge",
    M6i4xlarge = "m6i.4xlarge",
    M6i8xlarge = "m6i.8xlarge",
    M6i12xlarge = "m6i.12xlarge",
    M6i16xlarge = "m6i.16xlarge",
    M6i24xlarge = "m6i.24xlarge",
    M6i32xlarge = "m6i.32xlarge",
    M6iMetal = "m6i.metal",
    Mac1Metal = "mac1.metal",
    P2Xlarge = "p2.xlarge",
    P28xlarge = "p2.8xlarge",
    P216xlarge = "p2.16xlarge",
    P32xlarge = "p3.2xlarge",
    P38xlarge = "p3.8xlarge",
    P316xlarge = "p3.16xlarge",
    P3dn24xlarge = "p3dn.24xlarge",
    P4d24xlarge = "p4d.24xlarge",
    R3Large = "r3.large",
    R3Xlarge = "r3.xlarge",
    R32xlarge = "r3.2xlarge",
    R34xlarge = "r3.4xlarge",
    R38xlarge = "r3.8xlarge",
    R4Large = "r4.large",
    R4Xlarge = "r4.xlarge",
    R42xlarge = "r4.2xlarge",
    R44xlarge = "r4.4xlarge",
    R48xlarge = "r4.8xlarge",
    R416xlarge = "r4.16xlarge",
    R5Large = "r5.large",
    R5Xlarge = "r5.xlarge",
    R52xlarge = "r5.2xlarge",
    R54xlarge = "r5.4xlarge",
    R58xlarge = "r5.8xlarge",
    R512xlarge = "r5.12xlarge",
    R516xlarge = "r5.16xlarge",
    R524xlarge = "r5.24xlarge",
    R5Metal = "r5.metal",
    R5aLarge = "r5a.large",
    R5aXlarge = "r5a.xlarge",
    R5a2xlarge = "r5a.2xlarge",
    R5a4xlarge = "r5a.4xlarge",
    R5a8xlarge = "r5a.8xlarge",
    R5a12xlarge = "r5a.12xlarge",
    R5a16xlarge = "r5a.16xlarge",
    R5a24xlarge = "r5a.24xlarge",
    R5adLarge = "r5ad.large",
    R5adXlarge = "r5ad.xlarge",
    R5ad2xlarge = "r5ad.2xlarge",
    R5ad4xlarge = "r5ad.4xlarge",
    R5ad8xlarge = "r5ad.8xlarge",
    R5ad12xlarge = "r5ad.12xlarge",
    R5ad16xlarge = "r5ad.16xlarge",
    R5ad24xlarge = "r5ad.24xlarge",
    R5bLarge = "r5b.large",
    R5bXlarge = "r5b.xlarge",
    R5b2xlarge = "r5b.2xlarge",
    R5b4xlarge = "r5b.4xlarge",
    R5b8xlarge = "r5b.8xlarge",
    R5b12xlarge = "r5b.12xlarge",
    R5b16xlarge = "r5b.16xlarge",
    R5b24xlarge = "r5b.24xlarge",
    R5bMetal = "r5b.metal",
    R5dLarge = "r5d.large",
    R5dXlarge = "r5d.xlarge",
    R5d2xlarge = "r5d.2xlarge",
    R5d4xlarge = "r5d.4xlarge",
    R5d8xlarge = "r5d.8xlarge",
    R5d12xlarge = "r5d.12xlarge",
    R5d16xlarge = "r5d.16xlarge",
    R5d24xlarge = "r5d.24xlarge",
    R5dMetal = "r5d.metal",
    R5dnLarge = "r5dn.large",
    R5dnXlarge = "r5dn.xlarge",
    R5dn2xlarge = "r5dn.2xlarge",
    R5dn4xlarge = "r5dn.4xlarge",
    R5dn8xlarge = "r5dn.8xlarge",
    R5dn12xlarge = "r5dn.12xlarge",
    R5dn16xlarge = "r5dn.16xlarge",
    R5dn24xlarge = "r5dn.24xlarge",
    R5dnMetal = "r5dn.metal",
    R5nLarge = "r5n.large",
    R5nXlarge = "r5n.xlarge",
    R5n2xlarge = "r5n.2xlarge",
    R5n4xlarge = "r5n.4xlarge",
    R5n8xlarge = "r5n.8xlarge",
    R5n12xlarge = "r5n.12xlarge",
    R5n16xlarge = "r5n.16xlarge",
    R5n24xlarge = "r5n.24xlarge",
    R5nMetal = "r5n.metal",
    R6gMedium = "r6g.medium",
    R6gLarge = "r6g.large",
    R6gXlarge = "r6g.xlarge",
    R6g2xlarge = "r6g.2xlarge",
    R6g4xlarge = "r6g.4xlarge",
    R6g8xlarge = "r6g.8xlarge",
    R6g12xlarge = "r6g.12xlarge",
    R6g16xlarge = "r6g.16xlarge",
    R6gMetal = "r6g.metal",
    R6gdMedium = "r6gd.medium",
    R6gdLarge = "r6gd.large",
    R6gdXlarge = "r6gd.xlarge",
    R6gd2xlarge = "r6gd.2xlarge",
    R6gd4xlarge = "r6gd.4xlarge",
    R6gd8xlarge = "r6gd.8xlarge",
    R6gd12xlarge = "r6gd.12xlarge",
    R6gd16xlarge = "r6gd.16xlarge",
    R6gdMetal = "r6gd.metal",
    R6iLarge = "r6i.large",
    R6iXlarge = "r6i.xlarge",
    R6i2xlarge = "r6i.2xlarge",
    R6i4xlarge = "r6i.4xlarge",
    R6i8xlarge = "r6i.8xlarge",
    R6i12xlarge = "r6i.12xlarge",
    R6i16xlarge = "r6i.16xlarge",
    R6i24xlarge = "r6i.24xlarge",
    R6i32xlarge = "r6i.32xlarge",
    R6iMetal = "r6i.metal",
    T1Micro = "t1.micro",
    T2Nano = "t2.nano",
    T2Micro = "t2.micro",
    T2Small = "t2.small",
    T2Medium = "t2.medium",
    T2Large = "t2.large",
    T2Xlarge = "t2.xlarge",
    T22xlarge = "t2.2xlarge",
    T3Nano = "t3.nano",
    T3Micro = "t3.micro",
    T3Small = "t3.small",
    T3Medium = "t3.medium",
    T3Large = "t3.large",
    T3Xlarge = "t3.xlarge",
    T32xlarge = "t3.2xlarge",
    T3aNano = "t3a.nano",
    T3aMicro = "t3a.micro",
    T3aSmall = "t3a.small",
    T3aMedium = "t3a.medium",
    T3aLarge = "t3a.large",
    T3aXlarge = "t3a.xlarge",
    T3a2xlarge = "t3a.2xlarge",
    T4gNano = "t4g.nano",
    T4gMicro = "t4g.micro",
    T4gSmall = "t4g.small",
    T4gMedium = "t4g.medium",
    T4gLarge = "t4g.large",
    T4gXlarge = "t4g.xlarge",
    T4g2xlarge = "t4g.2xlarge",
    U6tb156xlarge = "u-6tb1.56xlarge",
    U6tb1112xlarge = "u-6tb1.112xlarge",
    U9tb1112xlarge = "u-9tb1.112xlarge",
    U12tb1112xlarge = "u-12tb1.112xlarge",
    U6tb1Metal = "u-6tb1.metal",
    U9tb1Metal = "u-9tb1.metal",
    U12tb1Metal = "u-12tb1.metal",
    U18tb1Metal = "u-18tb1.metal",
    U24tb1Metal = "u-24tb1.metal",
    Vt13xlarge = "vt1.3xlarge",
    Vt16xlarge = "vt1.6xlarge",
    Vt124xlarge = "vt1.24xlarge",
    X116xlarge = "x1.16xlarge",
    X132xlarge = "x1.32xlarge",
    X1eXlarge = "x1e.xlarge",
    X1e2xlarge = "x1e.2xlarge",
    X1e4xlarge = "x1e.4xlarge",
    X1e8xlarge = "x1e.8xlarge",
    X1e16xlarge = "x1e.16xlarge",
    X1e32xlarge = "x1e.32xlarge",
    X2iezn2xlarge = "x2iezn.2xlarge",
    X2iezn4xlarge = "x2iezn.4xlarge",
    X2iezn6xlarge = "x2iezn.6xlarge",
    X2iezn8xlarge = "x2iezn.8xlarge",
    X2iezn12xlarge = "x2iezn.12xlarge",
    X2ieznMetal = "x2iezn.metal",
    X2gdMedium = "x2gd.medium",
    X2gdLarge = "x2gd.large",
    X2gdXlarge = "x2gd.xlarge",
    X2gd2xlarge = "x2gd.2xlarge",
    X2gd4xlarge = "x2gd.4xlarge",
    X2gd8xlarge = "x2gd.8xlarge",
    X2gd12xlarge = "x2gd.12xlarge",
    X2gd16xlarge = "x2gd.16xlarge",
    X2gdMetal = "x2gd.metal",
    Z1dLarge = "z1d.large",
    Z1dXlarge = "z1d.xlarge",
    Z1d2xlarge = "z1d.2xlarge",
    Z1d3xlarge = "z1d.3xlarge",
    Z1d6xlarge = "z1d.6xlarge",
    Z1d12xlarge = "z1d.12xlarge",
    Z1dMetal = "z1d.metal",
    X2idn16xlarge = "x2idn.16xlarge",
    X2idn24xlarge = "x2idn.24xlarge",
    X2idn32xlarge = "x2idn.32xlarge",
    X2iednXlarge = "x2iedn.xlarge",
    X2iedn2xlarge = "x2iedn.2xlarge",
    X2iedn4xlarge = "x2iedn.4xlarge",
    X2iedn8xlarge = "x2iedn.8xlarge",
    X2iedn16xlarge = "x2iedn.16xlarge",
    X2iedn24xlarge = "x2iedn.24xlarge",
    X2iedn32xlarge = "x2iedn.32xlarge",
    C6aLarge = "c6a.large",
    C6aXlarge = "c6a.xlarge",
    C6a2xlarge = "c6a.2xlarge",
    C6a4xlarge = "c6a.4xlarge",
    C6a8xlarge = "c6a.8xlarge",
    C6a12xlarge = "c6a.12xlarge",
    C6a16xlarge = "c6a.16xlarge",
    C6a24xlarge = "c6a.24xlarge",
    C6a32xlarge = "c6a.32xlarge",
    C6a48xlarge = "c6a.48xlarge",
    C6aMetal = "c6a.metal",
    M6aMetal = "m6a.metal",
    I4iLarge = "i4i.large",
    I4iXlarge = "i4i.xlarge",
    I4i2xlarge = "i4i.2xlarge",
    I4i4xlarge = "i4i.4xlarge",
    I4i8xlarge = "i4i.8xlarge",
    I4i16xlarge = "i4i.16xlarge",
    I4i32xlarge = "i4i.32xlarge",
    I4iMetal = "i4i.metal",
    X2idnMetal = "x2idn.metal",
    X2iednMetal = "x2iedn.metal",
    C7gMedium = "c7g.medium",
    C7gLarge = "c7g.large",
    C7gXlarge = "c7g.xlarge",
    C7g2xlarge = "c7g.2xlarge",
    C7g4xlarge = "c7g.4xlarge",
    C7g8xlarge = "c7g.8xlarge",
    C7g12xlarge = "c7g.12xlarge",
    C7g16xlarge = "c7g.16xlarge",
    Mac2Metal = "mac2.metal",
    C6idLarge = "c6id.large",
    C6idXlarge = "c6id.xlarge",
    C6id2xlarge = "c6id.2xlarge",
    C6id4xlarge = "c6id.4xlarge",
    C6id8xlarge = "c6id.8xlarge",
    C6id12xlarge = "c6id.12xlarge",
    C6id16xlarge = "c6id.16xlarge",
    C6id24xlarge = "c6id.24xlarge",
    C6id32xlarge = "c6id.32xlarge",
    C6idMetal = "c6id.metal",
    M6idLarge = "m6id.large",
    M6idXlarge = "m6id.xlarge",
    M6id2xlarge = "m6id.2xlarge",
    M6id4xlarge = "m6id.4xlarge",
    M6id8xlarge = "m6id.8xlarge",
    M6id12xlarge = "m6id.12xlarge",
    M6id16xlarge = "m6id.16xlarge",
    M6id24xlarge = "m6id.24xlarge",
    M6id32xlarge = "m6id.32xlarge",
    M6idMetal = "m6id.metal",
    R6idLarge = "r6id.large",
    R6idXlarge = "r6id.xlarge",
    R6id2xlarge = "r6id.2xlarge",
    R6id4xlarge = "r6id.4xlarge",
    R6id8xlarge = "r6id.8xlarge",
    R6id12xlarge = "r6id.12xlarge",
    R6id16xlarge = "r6id.16xlarge",
    R6id24xlarge = "r6id.24xlarge",
    R6id32xlarge = "r6id.32xlarge",
    R6idMetal = "r6id.metal",
    R6aLarge = "r6a.large",
    R6aXlarge = "r6a.xlarge",
    R6a2xlarge = "r6a.2xlarge",
    R6a4xlarge = "r6a.4xlarge",
    R6a8xlarge = "r6a.8xlarge",
    R6a12xlarge = "r6a.12xlarge",
    R6a16xlarge = "r6a.16xlarge",
    R6a24xlarge = "r6a.24xlarge",
    R6a32xlarge = "r6a.32xlarge",
    R6a48xlarge = "r6a.48xlarge",
    R6aMetal = "r6a.metal",
    P4de24xlarge = "p4de.24xlarge",
    U3tb156xlarge = "u-3tb1.56xlarge",
    U18tb1112xlarge = "u-18tb1.112xlarge",
    U24tb1112xlarge = "u-24tb1.112xlarge",
    Trn12xlarge = "trn1.2xlarge",
    Trn132xlarge = "trn1.32xlarge",
    Hpc6id32xlarge = "hpc6id.32xlarge",
    C6inLarge = "c6in.large",
    C6inXlarge = "c6in.xlarge",
    C6in2xlarge = "c6in.2xlarge",
    C6in4xlarge = "c6in.4xlarge",
    C6in8xlarge = "c6in.8xlarge",
    C6in12xlarge = "c6in.12xlarge",
    C6in16xlarge = "c6in.16xlarge",
    C6in24xlarge = "c6in.24xlarge",
    C6in32xlarge = "c6in.32xlarge",
    M6inLarge = "m6in.large",
    M6inXlarge = "m6in.xlarge",
    M6in2xlarge = "m6in.2xlarge",
    M6in4xlarge = "m6in.4xlarge",
    M6in8xlarge = "m6in.8xlarge",
    M6in12xlarge = "m6in.12xlarge",
    M6in16xlarge = "m6in.16xlarge",
    M6in24xlarge = "m6in.24xlarge",
    M6in32xlarge = "m6in.32xlarge",
    M6idnLarge = "m6idn.large",
    M6idnXlarge = "m6idn.xlarge",
    M6idn2xlarge = "m6idn.2xlarge",
    M6idn4xlarge = "m6idn.4xlarge",
    M6idn8xlarge = "m6idn.8xlarge",
    M6idn12xlarge = "m6idn.12xlarge",
    M6idn16xlarge = "m6idn.16xlarge",
    M6idn24xlarge = "m6idn.24xlarge",
    M6idn32xlarge = "m6idn.32xlarge",
    R6inLarge = "r6in.large",
    R6inXlarge = "r6in.xlarge",
    R6in2xlarge = "r6in.2xlarge",
    R6in4xlarge = "r6in.4xlarge",
    R6in8xlarge = "r6in.8xlarge",
    R6in12xlarge = "r6in.12xlarge",
    R6in16xlarge = "r6in.16xlarge",
    R6in24xlarge = "r6in.24xlarge",
    R6in32xlarge = "r6in.32xlarge",
    R6idnLarge = "r6idn.large",
    R6idnXlarge = "r6idn.xlarge",
    R6idn2xlarge = "r6idn.2xlarge",
    R6idn4xlarge = "r6idn.4xlarge",
    R6idn8xlarge = "r6idn.8xlarge",
    R6idn12xlarge = "r6idn.12xlarge",
    R6idn16xlarge = "r6idn.16xlarge",
    R6idn24xlarge = "r6idn.24xlarge",
    R6idn32xlarge = "r6idn.32xlarge",
    C7gMetal = "c7g.metal",
    M7gMedium = "m7g.medium",
    M7gLarge = "m7g.large",
    M7gXlarge = "m7g.xlarge",
    M7g2xlarge = "m7g.2xlarge",
    M7g4xlarge = "m7g.4xlarge",
    M7g8xlarge = "m7g.8xlarge",
    M7g12xlarge = "m7g.12xlarge",
    M7g16xlarge = "m7g.16xlarge",
    M7gMetal = "m7g.metal",
    R7gMedium = "r7g.medium",
    R7gLarge = "r7g.large",
    R7gXlarge = "r7g.xlarge",
    R7g2xlarge = "r7g.2xlarge",
    R7g4xlarge = "r7g.4xlarge",
    R7g8xlarge = "r7g.8xlarge",
    R7g12xlarge = "r7g.12xlarge",
    R7g16xlarge = "r7g.16xlarge",
    R7gMetal = "r7g.metal"
}
/**
 * Describes overrides for a launch template.
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverrides extends SpeakeasyBase {
    availabilityZone?: string;
    instanceRequirements?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirements;
    instanceType?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceTypeEnum;
    priority?: number;
    spotPrice?: string;
    subnetId?: string;
    weightedCapacity?: number;
}
/**
 * Describes a launch template and overrides.
 */
export declare class ModifySpotFleetRequestRequestLaunchTemplateConfigs extends SpeakeasyBase {
    launchTemplateSpecification?: ModifySpotFleetRequestRequestLaunchTemplateConfigsLaunchTemplateSpecification;
    overrides?: ModifySpotFleetRequestRequestLaunchTemplateConfigsOverrides[];
}
/**
 * Contains the parameters for ModifySpotFleetRequest.
 */
export declare class ModifySpotFleetRequestRequest extends SpeakeasyBase {
    context?: string;
    excessCapacityTerminationPolicy?: ModifySpotFleetRequestRequestExcessCapacityTerminationPolicyEnum;
    launchTemplateConfigs?: ModifySpotFleetRequestRequestLaunchTemplateConfigs[];
    onDemandTargetCapacity?: number;
    spotFleetRequestId: string;
    targetCapacity?: number;
}
