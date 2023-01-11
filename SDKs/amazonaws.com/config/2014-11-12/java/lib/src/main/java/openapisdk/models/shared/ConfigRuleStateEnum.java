package openapisdk.models.shared;


public enum ConfigRuleStateEnum {
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    DELETING_RESULTS("DELETING_RESULTS"),
    EVALUATING("EVALUATING");

    public final String value;

    private ConfigRuleStateEnum(String value) {
        this.value = value;
    }
}
