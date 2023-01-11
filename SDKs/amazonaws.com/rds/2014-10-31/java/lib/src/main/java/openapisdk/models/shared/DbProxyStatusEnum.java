package openapisdk.models.shared;


public enum DbProxyStatusEnum {
    AVAILABLE("available"),
    MODIFYING("modifying"),
    INCOMPATIBLE_NETWORK("incompatible-network"),
    INSUFFICIENT_RESOURCE_LIMITS("insufficient-resource-limits"),
    CREATING("creating"),
    DELETING("deleting"),
    SUSPENDED("suspended"),
    SUSPENDING("suspending"),
    REACTIVATING("reactivating");

    public final String value;

    private DbProxyStatusEnum(String value) {
        this.value = value;
    }
}
