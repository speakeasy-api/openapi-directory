import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The architecture of the image.
 */
export declare enum DescribeImagesResultImagesArchitectureEnum {
    I386 = "i386",
    X8664 = "x86_64",
    Arm64 = "arm64",
    X8664Mac = "x86_64_mac",
    Arm64Mac = "arm64_mac"
}
/**
 * The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>, you must specify the IOPS that the volume supports.
 */
export declare enum DescribeImagesResultImagesBlockDeviceMappingsEbsVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * Parameters used to automatically set up EBS volumes when the instance is launched.
 */
export declare class DescribeImagesResultImagesBlockDeviceMappingsEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    outpostArn?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: DescribeImagesResultImagesBlockDeviceMappingsEbsVolumeTypeEnum;
}
/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 */
export declare class DescribeImagesResultImagesBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: DescribeImagesResultImagesBlockDeviceMappingsEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 * The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare enum DescribeImagesResultImagesBootModeEnum {
    LegacyBios = "legacy-bios",
    Uefi = "uefi",
    UefiPreferred = "uefi-preferred"
}
/**
 * The hypervisor type of the image.
 */
export declare enum DescribeImagesResultImagesHypervisorEnum {
    Ovm = "ovm",
    Xen = "xen"
}
/**
 * The type of image.
 */
export declare enum DescribeImagesResultImagesImageTypeEnum {
    Machine = "machine",
    Kernel = "kernel",
    Ramdisk = "ramdisk"
}
/**
 * If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare enum DescribeImagesResultImagesImdsSupportEnum {
    V20 = "v2.0"
}
/**
 * This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.
 */
export declare enum DescribeImagesResultImagesPlatformEnum {
    Windows = "Windows"
}
/**
 * The type of product code.
 */
export declare enum DescribeImagesResultImagesProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class DescribeImagesResultImagesProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: DescribeImagesResultImagesProductCodesProductCodeTypeEnum;
}
/**
 * The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.
 */
export declare enum DescribeImagesResultImagesRootDeviceTypeEnum {
    Ebs = "ebs",
    InstanceStore = "instance-store"
}
/**
 * The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.
 */
export declare enum DescribeImagesResultImagesStateEnum {
    Pending = "pending",
    Available = "available",
    Invalid = "invalid",
    Deregistered = "deregistered",
    Transient = "transient",
    Failed = "failed",
    Error = "error"
}
/**
 * The reason for the state change.
 */
export declare class DescribeImagesResultImagesStateReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeImagesResultImagesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * If the image is configured for NitroTPM support, the value is <code>v2.0</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html">NitroTPM</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare enum DescribeImagesResultImagesTpmSupportEnum {
    V20 = "v2.0"
}
/**
 * The type of virtualization of the AMI.
 */
export declare enum DescribeImagesResultImagesVirtualizationTypeEnum {
    Hvm = "hvm",
    Paravirtual = "paravirtual"
}
/**
 * Describes an image.
 */
export declare class DescribeImagesResultImages extends SpeakeasyBase {
    architecture?: DescribeImagesResultImagesArchitectureEnum;
    blockDeviceMappings?: DescribeImagesResultImagesBlockDeviceMappings[];
    bootMode?: DescribeImagesResultImagesBootModeEnum;
    creationDate?: string;
    deprecationTime?: string;
    description?: string;
    enaSupport?: boolean;
    hypervisor?: DescribeImagesResultImagesHypervisorEnum;
    imageId?: string;
    imageLocation?: string;
    imageOwnerAlias?: string;
    imageType?: DescribeImagesResultImagesImageTypeEnum;
    imdsSupport?: DescribeImagesResultImagesImdsSupportEnum;
    kernelId?: string;
    name?: string;
    ownerId?: string;
    platform?: DescribeImagesResultImagesPlatformEnum;
    platformDetails?: string;
    productCodes?: DescribeImagesResultImagesProductCodes[];
    public?: boolean;
    ramdiskId?: string;
    rootDeviceName?: string;
    rootDeviceType?: DescribeImagesResultImagesRootDeviceTypeEnum;
    sriovNetSupport?: string;
    state?: DescribeImagesResultImagesStateEnum;
    stateReason?: DescribeImagesResultImagesStateReason;
    tags?: DescribeImagesResultImagesTags[];
    tpmSupport?: DescribeImagesResultImagesTpmSupportEnum;
    usageOperation?: string;
    virtualizationType?: DescribeImagesResultImagesVirtualizationTypeEnum;
}
/**
 * Success
 */
export declare class DescribeImagesResult extends SpeakeasyBase {
    images?: DescribeImagesResultImages[];
    nextToken?: string;
}
