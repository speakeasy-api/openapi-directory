import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The attribute to reset.</p> <important> <p>You can only reset the following attributes: <code>kernel</code> | <code>ramdisk</code> | <code>sourceDestCheck</code>.</p> </important>
 */
export declare enum ResetInstanceAttributeRequestAttributeEnum {
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
export declare class ResetInstanceAttributeRequest extends SpeakeasyBase {
    attribute: ResetInstanceAttributeRequestAttributeEnum;
    dryRun?: boolean;
    instanceId: string;
}
