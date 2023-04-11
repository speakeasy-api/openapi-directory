import { SpeakeasyBase } from "../../../internal/utils";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { ImdsSupportValuesEnum } from "./imdssupportvaluesenum";
import { TpmSupportValuesEnum } from "./tpmsupportvaluesenum";
/**
 * <p>The architecture of the AMI.</p> <p>Default: For Amazon EBS-backed AMIs, <code>i386</code>. For instance store-backed AMIs, the architecture specified in the manifest file.</p>
 */
export declare enum RegisterImageRequestArchitectureEnum {
    I386 = "i386",
    X8664 = "x86_64",
    Arm64 = "arm64",
    X8664Mac = "x86_64_mac",
    Arm64Mac = "arm64_mac"
}
/**
 * The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>, you must specify the IOPS that the volume supports.
 */
export declare enum RegisterImageRequestBlockDeviceMappingsEbsVolumeTypeEnum {
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
export declare class RegisterImageRequestBlockDeviceMappingsEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    outpostArn?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: RegisterImageRequestBlockDeviceMappingsEbsVolumeTypeEnum;
}
/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 */
export declare class RegisterImageRequestBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: RegisterImageRequestBlockDeviceMappingsEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 * Contains the parameters for RegisterImage.
 */
export declare class RegisterImageRequest extends SpeakeasyBase {
    architecture?: RegisterImageRequestArchitectureEnum;
    billingProducts?: string[];
    blockDeviceMappings?: RegisterImageRequestBlockDeviceMappings[];
    bootMode?: BootModeValuesEnum;
    description?: string;
    dryRun?: boolean;
    enaSupport?: boolean;
    imageLocation?: string;
    imdsSupport?: ImdsSupportValuesEnum;
    kernelId?: string;
    name: string;
    ramdiskId?: string;
    rootDeviceName?: string;
    sriovNetSupport?: string;
    tpmSupport?: TpmSupportValuesEnum;
    uefiData?: string;
    virtualizationType?: string;
}
