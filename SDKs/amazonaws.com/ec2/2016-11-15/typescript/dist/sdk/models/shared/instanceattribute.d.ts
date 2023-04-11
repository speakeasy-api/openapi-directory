import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attachment state.
 */
export declare enum InstanceAttributeBlockDeviceMappingsEbsStatusEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Parameters used to automatically set up EBS volumes when the instance is launched.
 */
export declare class InstanceAttributeBlockDeviceMappingsEbs extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    status?: InstanceAttributeBlockDeviceMappingsEbsStatusEnum;
    volumeId?: string;
}
/**
 * Describes a block device mapping.
 */
export declare class InstanceAttributeBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: InstanceAttributeBlockDeviceMappingsEbs;
}
/**
 * To enable the instance for Amazon Web Services Stop Protection, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
 */
export declare class InstanceAttributeDisableApiStop extends SpeakeasyBase {
    value?: boolean;
}
/**
 * If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
 */
export declare class InstanceAttributeDisableApiTermination extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Indicates whether the instance is optimized for Amazon EBS I/O.
 */
export declare class InstanceAttributeEbsOptimized extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Indicates whether enhanced networking with ENA is enabled.
 */
export declare class InstanceAttributeEnaSupport extends SpeakeasyBase {
    value?: boolean;
}
/**
 * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
 */
export declare class InstanceAttributeEnclaveOptions extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Describes a security group.
 */
export declare class InstanceAttributeGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
 */
export declare class InstanceAttributeInstanceInitiatedShutdownBehavior extends SpeakeasyBase {
    value?: string;
}
/**
 * The instance type.
 */
export declare class InstanceAttributeInstanceType extends SpeakeasyBase {
    value?: string;
}
/**
 * The kernel ID.
 */
export declare class InstanceAttributeKernelId extends SpeakeasyBase {
    value?: string;
}
/**
 * The type of product code.
 */
export declare enum InstanceAttributeProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class InstanceAttributeProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: InstanceAttributeProductCodesProductCodeTypeEnum;
}
/**
 * The RAM disk ID.
 */
export declare class InstanceAttributeRamdiskId extends SpeakeasyBase {
    value?: string;
}
/**
 * The device name of the root device volume (for example, <code>/dev/sda1</code>).
 */
export declare class InstanceAttributeRootDeviceName extends SpeakeasyBase {
    value?: string;
}
/**
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
 */
export declare class InstanceAttributeSourceDestCheck extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
 */
export declare class InstanceAttributeSriovNetSupport extends SpeakeasyBase {
    value?: string;
}
/**
 * The user data.
 */
export declare class InstanceAttributeUserData extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes an instance attribute.
 */
export declare class InstanceAttribute extends SpeakeasyBase {
    blockDeviceMappings?: InstanceAttributeBlockDeviceMappings[];
    disableApiStop?: InstanceAttributeDisableApiStop;
    disableApiTermination?: InstanceAttributeDisableApiTermination;
    ebsOptimized?: InstanceAttributeEbsOptimized;
    enaSupport?: InstanceAttributeEnaSupport;
    enclaveOptions?: InstanceAttributeEnclaveOptions;
    groups?: InstanceAttributeGroups[];
    instanceId?: string;
    instanceInitiatedShutdownBehavior?: InstanceAttributeInstanceInitiatedShutdownBehavior;
    instanceType?: InstanceAttributeInstanceType;
    kernelId?: InstanceAttributeKernelId;
    productCodes?: InstanceAttributeProductCodes[];
    ramdiskId?: InstanceAttributeRamdiskId;
    rootDeviceName?: InstanceAttributeRootDeviceName;
    sourceDestCheck?: InstanceAttributeSourceDestCheck;
    sriovNetSupport?: InstanceAttributeSriovNetSupport;
    userData?: InstanceAttributeUserData;
}
