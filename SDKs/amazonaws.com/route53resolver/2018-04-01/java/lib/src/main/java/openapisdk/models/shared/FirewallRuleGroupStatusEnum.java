package openapisdk.models.shared;


public enum FirewallRuleGroupStatusEnum {
    COMPLETE("COMPLETE"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private FirewallRuleGroupStatusEnum(String value) {
        this.value = value;
    }
}
