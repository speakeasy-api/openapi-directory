import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The instance attribute.</p> <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
 */
export declare enum DescribeInstanceAttributeRequestAttributeEnum {
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
export declare class DescribeInstanceAttributeRequest extends SpeakeasyBase {
    attribute: DescribeInstanceAttributeRequestAttributeEnum;
    dryRun?: boolean;
    instanceId: string;
}
