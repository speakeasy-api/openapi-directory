package openapisdk.models.shared;


public enum PlatformDifferenceEnum {
    HYPERVISOR("Hypervisor"),
    NETWORK_INTERFACE("NetworkInterface"),
    STORAGE_INTERFACE("StorageInterface"),
    INSTANCE_STORE_AVAILABILITY("InstanceStoreAvailability"),
    VIRTUALIZATION_TYPE("VirtualizationType"),
    ARCHITECTURE("Architecture");

    public final String value;

    private PlatformDifferenceEnum(String value) {
        this.value = value;
    }
}
