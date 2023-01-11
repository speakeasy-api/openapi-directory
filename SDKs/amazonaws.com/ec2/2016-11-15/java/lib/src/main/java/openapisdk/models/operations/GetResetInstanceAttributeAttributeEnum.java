package openapisdk.models.operations;


public enum GetResetInstanceAttributeAttributeEnum {
    INSTANCE_TYPE("instanceType"),
    KERNEL("kernel"),
    RAMDISK("ramdisk"),
    USER_DATA("userData"),
    DISABLE_API_TERMINATION("disableApiTermination"),
    INSTANCE_INITIATED_SHUTDOWN_BEHAVIOR("instanceInitiatedShutdownBehavior"),
    ROOT_DEVICE_NAME("rootDeviceName"),
    BLOCK_DEVICE_MAPPING("blockDeviceMapping"),
    PRODUCT_CODES("productCodes"),
    SOURCE_DEST_CHECK("sourceDestCheck"),
    GROUP_SET("groupSet"),
    EBS_OPTIMIZED("ebsOptimized"),
    SRIOV_NET_SUPPORT("sriovNetSupport"),
    ENA_SUPPORT("enaSupport"),
    ENCLAVE_OPTIONS("enclaveOptions");

    public final String value;

    private GetResetInstanceAttributeAttributeEnum(String value) {
        this.value = value;
    }
}
