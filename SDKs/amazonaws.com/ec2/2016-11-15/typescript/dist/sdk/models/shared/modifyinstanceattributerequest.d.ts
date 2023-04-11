import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
/**
 * <p>The name of the attribute to modify.</p> <important> <p>You can modify the following attributes only: <code>disableApiTermination</code> | <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> | <code>instanceInitiatedShutdownBehavior</code> | <code>blockDeviceMapping</code> | <code>userData</code> | <code>sourceDestCheck</code> | <code>groupSet</code> | <code>ebsOptimized</code> | <code>sriovNetSupport</code> | <code>enaSupport</code> | <code>nvmeSupport</code> | <code>disableApiStop</code> | <code>enclaveOptions</code> </p> </important>
 */
export declare enum ModifyInstanceAttributeRequestAttributeEnum {
    InstanceType = "instanceType",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    UserData = "userData",
    DisableApiTermination = "disableApiTermination",
    InstanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior",
    RootDeviceName = "rootDeviceName",
    BlockDeviceMapping = "blockDeviceMapping",
    ProductCodes = "productCodes",
    SourceDestCheck = "sourceDestCheck",
    GroupSet = "groupSet",
    EbsOptimized = "ebsOptimized",
    SriovNetSupport = "sriovNetSupport",
    EnaSupport = "enaSupport",
    EnclaveOptions = "enclaveOptions",
    DisableApiStop = "disableApiStop"
}
/**
 * Parameters used to automatically set up EBS volumes when the instance is launched.
 */
export declare class ModifyInstanceAttributeRequestBlockDeviceMappingsEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    volumeId?: string;
}
/**
 * Describes a block device mapping entry.
 */
export declare class ModifyInstanceAttributeRequestBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: ModifyInstanceAttributeRequestBlockDeviceMappingsEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 * If the value is <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot Instances.
 */
export declare class ModifyInstanceAttributeRequestDisableApiTermination extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Specifies whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
 */
export declare class ModifyInstanceAttributeRequestEbsOptimized extends SpeakeasyBase {
    value?: boolean;
}
/**
 * <p>Set to <code>true</code> to enable enhanced networking with ENA for the instance.</p> <p>This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</p>
 */
export declare class ModifyInstanceAttributeRequestEnaSupport extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Specifies whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
 */
export declare class ModifyInstanceAttributeRequestInstanceInitiatedShutdownBehavior extends SpeakeasyBase {
    value?: string;
}
/**
 * Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>. If the instance type is not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.
 */
export declare class ModifyInstanceAttributeRequestInstanceType extends SpeakeasyBase {
    value?: string;
}
/**
 * Changes the instance's kernel to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.
 */
export declare class ModifyInstanceAttributeRequestKernel extends SpeakeasyBase {
    value?: string;
}
/**
 * Changes the instance's RAM disk to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.
 */
export declare class ModifyInstanceAttributeRequestRamdisk extends SpeakeasyBase {
    value?: string;
}
/**
 * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the instance.</p> <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function interface at this time.</p> <p>This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</p>
 */
export declare class ModifyInstanceAttributeRequestSriovNetSupport extends SpeakeasyBase {
    value?: string;
}
/**
 * Changes the instance's user data to the specified value. If you are using an Amazon Web Services SDK or command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text.
 */
export declare class ModifyInstanceAttributeRequestUserData extends SpeakeasyBase {
    value?: string;
}
export declare class ModifyInstanceAttributeRequest extends SpeakeasyBase {
    attribute?: ModifyInstanceAttributeRequestAttributeEnum;
    blockDeviceMappings?: ModifyInstanceAttributeRequestBlockDeviceMappings[];
    disableApiStop?: AttributeBooleanValue;
    disableApiTermination?: ModifyInstanceAttributeRequestDisableApiTermination;
    dryRun?: boolean;
    ebsOptimized?: ModifyInstanceAttributeRequestEbsOptimized;
    enaSupport?: ModifyInstanceAttributeRequestEnaSupport;
    groups?: string[];
    instanceId: string;
    instanceInitiatedShutdownBehavior?: ModifyInstanceAttributeRequestInstanceInitiatedShutdownBehavior;
    instanceType?: ModifyInstanceAttributeRequestInstanceType;
    kernel?: ModifyInstanceAttributeRequestKernel;
    ramdisk?: ModifyInstanceAttributeRequestRamdisk;
    sourceDestCheck?: AttributeBooleanValue;
    sriovNetSupport?: ModifyInstanceAttributeRequestSriovNetSupport;
    userData?: ModifyInstanceAttributeRequestUserData;
    value?: string;
}
