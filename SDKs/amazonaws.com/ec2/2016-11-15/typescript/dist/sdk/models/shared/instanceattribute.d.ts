import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
**/
export declare class InstanceAttributeDisableApiTermination extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Indicates whether the instance is optimized for Amazon EBS I/O.
**/
export declare class InstanceAttributeEbsOptimized extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Indicates whether enhanced networking with ENA is enabled.
**/
export declare class InstanceAttributeEnaSupport extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
**/
export declare class InstanceAttributeEnclaveOptions extends SpeakeasyBase {
    enabled?: Record<string, any>;
}
/**
 * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
**/
export declare class InstanceAttributeInstanceInitiatedShutdownBehavior extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The instance type.
**/
export declare class InstanceAttributeInstanceType extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The kernel ID.
**/
export declare class InstanceAttributeKernelId extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The RAM disk ID.
**/
export declare class InstanceAttributeRamdiskId extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The device name of the root device volume (for example, <code>/dev/sda1</code>).
**/
export declare class InstanceAttributeRootDeviceName extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
**/
export declare class InstanceAttributeSourceDestCheck extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
export declare class InstanceAttributeSriovNetSupport extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The user data.
**/
export declare class InstanceAttributeUserData extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Describes an instance attribute.
**/
export declare class InstanceAttribute extends SpeakeasyBase {
    blockDeviceMappings?: Record<string, any>;
    disableApiTermination?: InstanceAttributeDisableApiTermination;
    ebsOptimized?: InstanceAttributeEbsOptimized;
    enaSupport?: InstanceAttributeEnaSupport;
    enclaveOptions?: InstanceAttributeEnclaveOptions;
    groups?: Record<string, any>;
    instanceId?: Record<string, any>;
    instanceInitiatedShutdownBehavior?: InstanceAttributeInstanceInitiatedShutdownBehavior;
    instanceType?: InstanceAttributeInstanceType;
    kernelId?: InstanceAttributeKernelId;
    productCodes?: Record<string, any>;
    ramdiskId?: InstanceAttributeRamdiskId;
    rootDeviceName?: InstanceAttributeRootDeviceName;
    sourceDestCheck?: InstanceAttributeSourceDestCheck;
    sriovNetSupport?: InstanceAttributeSriovNetSupport;
    userData?: InstanceAttributeUserData;
}
