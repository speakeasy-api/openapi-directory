package openapisdk.models.operations;


public enum GetNetworksAdDealStatusEnum {
    ACTIVE("active"),
    INACTIVE("inactive"),
    PENDING_ACTIVE("pending_active"),
    PENDING_INACTIVE("pending_inactive");

    public final String value;

    private GetNetworksAdDealStatusEnum(String value) {
        this.value = value;
    }
}
