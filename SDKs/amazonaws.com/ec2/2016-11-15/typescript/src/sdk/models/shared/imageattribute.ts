import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageAttributeBootMode
/** 
 * Describes a value for a resource attribute that is a String.
**/
export class ImageAttributeBootMode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ImageAttributeDescription
/** 
 * A description for the AMI.
**/
export class ImageAttributeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ImageAttributeKernelId
/** 
 * The kernel ID.
**/
export class ImageAttributeKernelId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ImageAttributeRamdiskId
/** 
 * The RAM disk ID.
**/
export class ImageAttributeRamdiskId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ImageAttributeSriovNetSupport
/** 
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
export class ImageAttributeSriovNetSupport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  value?: Record<string, any>;
}


// ImageAttribute
/** 
 * Describes an image attribute.
**/
export class ImageAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDeviceMappings?: Record<string, any>;

  @SpeakeasyMetadata()
  bootMode?: ImageAttributeBootMode;

  @SpeakeasyMetadata()
  description?: ImageAttributeDescription;

  @SpeakeasyMetadata()
  imageId?: Record<string, any>;

  @SpeakeasyMetadata()
  kernelId?: ImageAttributeKernelId;

  @SpeakeasyMetadata()
  launchPermissions?: Record<string, any>;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;

  @SpeakeasyMetadata()
  ramdiskId?: ImageAttributeRamdiskId;

  @SpeakeasyMetadata()
  sriovNetSupport?: ImageAttributeSriovNetSupport;
}
