package openapisdk.models.shared;



/**
 * ImageAttribute
 * Describes an image attribute.
**/
public class ImageAttribute {
    public java.util.Map<String, Object> blockDeviceMappings;
    public ImageAttribute withBlockDeviceMappings(java.util.Map<String, Object> blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    public ImageAttributeBootMode bootMode;
    public ImageAttribute withBootMode(ImageAttributeBootMode bootMode) {
        this.bootMode = bootMode;
        return this;
    }
    public ImageAttributeDescription description;
    public ImageAttribute withDescription(ImageAttributeDescription description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> imageId;
    public ImageAttribute withImageId(java.util.Map<String, Object> imageId) {
        this.imageId = imageId;
        return this;
    }
    public ImageAttributeKernelId kernelId;
    public ImageAttribute withKernelId(ImageAttributeKernelId kernelId) {
        this.kernelId = kernelId;
        return this;
    }
    public java.util.Map<String, Object> launchPermissions;
    public ImageAttribute withLaunchPermissions(java.util.Map<String, Object> launchPermissions) {
        this.launchPermissions = launchPermissions;
        return this;
    }
    public java.util.Map<String, Object> productCodes;
    public ImageAttribute withProductCodes(java.util.Map<String, Object> productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    public ImageAttributeRamdiskId ramdiskId;
    public ImageAttribute withRamdiskId(ImageAttributeRamdiskId ramdiskId) {
        this.ramdiskId = ramdiskId;
        return this;
    }
    public ImageAttributeSriovNetSupport sriovNetSupport;
    public ImageAttribute withSriovNetSupport(ImageAttributeSriovNetSupport sriovNetSupport) {
        this.sriovNetSupport = sriovNetSupport;
        return this;
    }
}