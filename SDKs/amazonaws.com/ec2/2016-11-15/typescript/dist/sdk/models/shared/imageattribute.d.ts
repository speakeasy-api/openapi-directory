import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>, you must specify the IOPS that the volume supports.
 */
export declare enum ImageAttributeBlockDeviceMappingsEbsVolumeTypeEnum {
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
export declare class ImageAttributeBlockDeviceMappingsEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    outpostArn?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: ImageAttributeBlockDeviceMappingsEbsVolumeTypeEnum;
}
/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 */
export declare class ImageAttributeBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: ImageAttributeBlockDeviceMappingsEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 * The boot mode.
 */
export declare class ImageAttributeBootMode extends SpeakeasyBase {
    value?: string;
}
/**
 * A description for the AMI.
 */
export declare class ImageAttributeDescription extends SpeakeasyBase {
    value?: string;
}
/**
 * If <code>v2.0</code>, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have <code>HttpTokens</code> automatically set to <code>required</code> so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, <code>HttpPutResponseHopLimit</code> is set to <code>2</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration">Configure the AMI</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare class ImageAttributeImdsSupport extends SpeakeasyBase {
    value?: string;
}
/**
 * The kernel ID.
 */
export declare class ImageAttributeKernelId extends SpeakeasyBase {
    value?: string;
}
/**
 * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the AMI was last used to launch an EC2 instance. When the AMI is used to launch an instance, there is a 24-hour delay before that usage is reported.</p> <note> <p> <code>lastLaunchedTime</code> data is available starting April 2017.</p> </note>
 */
export declare class ImageAttributeLastLaunchedTime extends SpeakeasyBase {
    value?: string;
}
/**
 * The name of the group.
 */
export declare enum ImageAttributeLaunchPermissionsGroupEnum {
    All = "all"
}
/**
 * Describes a launch permission.
 */
export declare class ImageAttributeLaunchPermissions extends SpeakeasyBase {
    group?: ImageAttributeLaunchPermissionsGroupEnum;
    organizationArn?: string;
    organizationalUnitArn?: string;
    userId?: string;
}
/**
 * The type of product code.
 */
export declare enum ImageAttributeProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class ImageAttributeProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: ImageAttributeProductCodesProductCodeTypeEnum;
}
/**
 * The RAM disk ID.
 */
export declare class ImageAttributeRamdiskId extends SpeakeasyBase {
    value?: string;
}
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
 */
export declare class ImageAttributeSriovNetSupport extends SpeakeasyBase {
    value?: string;
}
/**
 * If the image is configured for NitroTPM support, the value is <code>v2.0</code>.
 */
export declare class ImageAttributeTpmSupport extends SpeakeasyBase {
    value?: string;
}
/**
 * Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceUefiData">GetInstanceUefiData</a> command. You can inspect and modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on GitHub. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare class ImageAttributeUefiData extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes an image attribute.
 */
export declare class ImageAttribute extends SpeakeasyBase {
    blockDeviceMappings?: ImageAttributeBlockDeviceMappings[];
    bootMode?: ImageAttributeBootMode;
    description?: ImageAttributeDescription;
    imageId?: string;
    imdsSupport?: ImageAttributeImdsSupport;
    kernelId?: ImageAttributeKernelId;
    lastLaunchedTime?: ImageAttributeLastLaunchedTime;
    launchPermissions?: ImageAttributeLaunchPermissions[];
    productCodes?: ImageAttributeProductCodes[];
    ramdiskId?: ImageAttributeRamdiskId;
    sriovNetSupport?: ImageAttributeSriovNetSupport;
    tpmSupport?: ImageAttributeTpmSupport;
    uefiData?: ImageAttributeUefiData;
}
