package openapisdk.models.shared;


public enum ResolverEndpointStatusEnum {
    CREATING("CREATING"),
    OPERATIONAL("OPERATIONAL"),
    UPDATING("UPDATING"),
    AUTO_RECOVERING("AUTO_RECOVERING"),
    ACTION_NEEDED("ACTION_NEEDED"),
    DELETING("DELETING");

    public final String value;

    private ResolverEndpointStatusEnum(String value) {
        this.value = value;
    }
}
