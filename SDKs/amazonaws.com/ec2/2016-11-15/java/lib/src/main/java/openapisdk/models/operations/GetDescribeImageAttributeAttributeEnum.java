package openapisdk.models.operations;


public enum GetDescribeImageAttributeAttributeEnum {
    DESCRIPTION("description"),
    KERNEL("kernel"),
    RAMDISK("ramdisk"),
    LAUNCH_PERMISSION("launchPermission"),
    PRODUCT_CODES("productCodes"),
    BLOCK_DEVICE_MAPPING("blockDeviceMapping"),
    SRIOV_NET_SUPPORT("sriovNetSupport"),
    BOOT_MODE("bootMode");

    public final String value;

    private GetDescribeImageAttributeAttributeEnum(String value) {
        this.value = value;
    }
}
