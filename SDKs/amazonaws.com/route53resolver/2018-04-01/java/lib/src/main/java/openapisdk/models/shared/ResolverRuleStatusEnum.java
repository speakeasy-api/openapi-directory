package openapisdk.models.shared;


public enum ResolverRuleStatusEnum {
    COMPLETE("COMPLETE"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    FAILED("FAILED");

    public final String value;

    private ResolverRuleStatusEnum(String value) {
        this.value = value;
    }
}
