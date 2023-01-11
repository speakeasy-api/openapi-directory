package openapisdk.models.shared;


public enum RuleGroupTypeEnum {
    STATELESS("STATELESS"),
    STATEFUL("STATEFUL");

    public final String value;

    private RuleGroupTypeEnum(String value) {
        this.value = value;
    }
}
