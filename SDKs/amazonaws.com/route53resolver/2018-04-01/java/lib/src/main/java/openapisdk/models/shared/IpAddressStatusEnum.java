package openapisdk.models.shared;


public enum IpAddressStatusEnum {
    CREATING("CREATING"),
    FAILED_CREATION("FAILED_CREATION"),
    ATTACHING("ATTACHING"),
    ATTACHED("ATTACHED"),
    REMAP_DETACHING("REMAP_DETACHING"),
    REMAP_ATTACHING("REMAP_ATTACHING"),
    DETACHING("DETACHING"),
    FAILED_RESOURCE_GONE("FAILED_RESOURCE_GONE"),
    DELETING("DELETING"),
    DELETE_FAILED_FAS_EXPIRED("DELETE_FAILED_FAS_EXPIRED");

    public final String value;

    private IpAddressStatusEnum(String value) {
        this.value = value;
    }
}
