package openapisdk.models.shared;


public enum ResolverQueryLogConfigAssociationStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    ACTION_NEEDED("ACTION_NEEDED"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private ResolverQueryLogConfigAssociationStatusEnum(String value) {
        this.value = value;
    }
}
