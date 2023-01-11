import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceAttributeDisableApiTermination
/** 
 * If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.
**/
export class InstanceAttributeDisableApiTermination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeEbsOptimized
/** 
 * Indicates whether the instance is optimized for Amazon EBS I/O.
**/
export class InstanceAttributeEbsOptimized extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeEnaSupport
/** 
 * Indicates whether enhanced networking with ENA is enabled.
**/
export class InstanceAttributeEnaSupport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeEnclaveOptions
/** 
 * To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>; otherwise, set it to <code>false</code>.
**/
export class InstanceAttributeEnclaveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: Record<string, any>;
}


// InstanceAttributeInstanceInitiatedShutdownBehavior
/** 
 * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
**/
export class InstanceAttributeInstanceInitiatedShutdownBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeInstanceType
/** 
 * The instance type.
**/
export class InstanceAttributeInstanceType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeKernelId
/** 
 * The kernel ID.
**/
export class InstanceAttributeKernelId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeRamdiskId
/** 
 * The RAM disk ID.
**/
export class InstanceAttributeRamdiskId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeRootDeviceName
/** 
 * The device name of the root device volume (for example, <code>/dev/sda1</code>).
**/
export class InstanceAttributeRootDeviceName extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeSourceDestCheck
/** 
 * Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is <code>true</code>, source/destination checks are enabled; otherwise, they are disabled. The default value is <code>true</code>. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
**/
export class InstanceAttributeSourceDestCheck extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeSriovNetSupport
/** 
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
export class InstanceAttributeSriovNetSupport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttributeUserData
/** 
 * The user data.
**/
export class InstanceAttributeUserData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// InstanceAttribute
/** 
 * Describes an instance attribute.
**/
export class InstanceAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDeviceMappings?: Record<string, any>;

  @SpeakeasyMetadata()
  disableApiTermination?: InstanceAttributeDisableApiTermination;

  @SpeakeasyMetadata()
  ebsOptimized?: InstanceAttributeEbsOptimized;

  @SpeakeasyMetadata()
  enaSupport?: InstanceAttributeEnaSupport;

  @SpeakeasyMetadata()
  enclaveOptions?: InstanceAttributeEnclaveOptions;

  @SpeakeasyMetadata()
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceInitiatedShutdownBehavior?: InstanceAttributeInstanceInitiatedShutdownBehavior;

  @SpeakeasyMetadata()
  instanceType?: InstanceAttributeInstanceType;

  @SpeakeasyMetadata()
  kernelId?: InstanceAttributeKernelId;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;

  @SpeakeasyMetadata()
  ramdiskId?: InstanceAttributeRamdiskId;

  @SpeakeasyMetadata()
  rootDeviceName?: InstanceAttributeRootDeviceName;

  @SpeakeasyMetadata()
  sourceDestCheck?: InstanceAttributeSourceDestCheck;

  @SpeakeasyMetadata()
  sriovNetSupport?: InstanceAttributeSriovNetSupport;

  @SpeakeasyMetadata()
  userData?: InstanceAttributeUserData;
}
