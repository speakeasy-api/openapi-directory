package openapisdk.models.shared;


public enum DbProxyEndpointStatusEnum {
    AVAILABLE("available"),
    MODIFYING("modifying"),
    INCOMPATIBLE_NETWORK("incompatible-network"),
    INSUFFICIENT_RESOURCE_LIMITS("insufficient-resource-limits"),
    CREATING("creating"),
    DELETING("deleting");

    public final String value;

    private DbProxyEndpointStatusEnum(String value) {
        this.value = value;
    }
}
