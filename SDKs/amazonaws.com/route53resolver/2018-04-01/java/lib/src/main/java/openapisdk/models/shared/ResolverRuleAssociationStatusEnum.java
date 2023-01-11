package openapisdk.models.shared;


public enum ResolverRuleAssociationStatusEnum {
    CREATING("CREATING"),
    COMPLETE("COMPLETE"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    OVERRIDDEN("OVERRIDDEN");

    public final String value;

    private ResolverRuleAssociationStatusEnum(String value) {
        this.value = value;
    }
}
