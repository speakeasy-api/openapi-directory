import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a value for a resource attribute that is a String.
**/
export declare class ImageAttributeBootMode extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * A description for the AMI.
**/
export declare class ImageAttributeDescription extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The kernel ID.
**/
export declare class ImageAttributeKernelId extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * The RAM disk ID.
**/
export declare class ImageAttributeRamdiskId extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
export declare class ImageAttributeSriovNetSupport extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Describes an image attribute.
**/
export declare class ImageAttribute extends SpeakeasyBase {
    blockDeviceMappings?: Record<string, any>;
    bootMode?: ImageAttributeBootMode;
    description?: ImageAttributeDescription;
    imageId?: Record<string, any>;
    kernelId?: ImageAttributeKernelId;
    launchPermissions?: Record<string, any>;
    productCodes?: Record<string, any>;
    ramdiskId?: ImageAttributeRamdiskId;
    sriovNetSupport?: ImageAttributeSriovNetSupport;
}
