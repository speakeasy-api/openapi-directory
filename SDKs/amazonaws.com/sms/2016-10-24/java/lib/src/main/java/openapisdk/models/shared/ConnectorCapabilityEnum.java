package openapisdk.models.shared;


public enum ConnectorCapabilityEnum {
    VSPHERE("VSPHERE"),
    SCVMM("SCVMM"),
    HYPERV_MANAGER("HYPERV-MANAGER"),
    SNAPSHOT_BATCHING("SNAPSHOT_BATCHING"),
    SMS_OPTIMIZED("SMS_OPTIMIZED");

    public final String value;

    private ConnectorCapabilityEnum(String value) {
        this.value = value;
    }
}
