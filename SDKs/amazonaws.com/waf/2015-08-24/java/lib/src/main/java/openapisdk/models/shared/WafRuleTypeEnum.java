package openapisdk.models.shared;


public enum WafRuleTypeEnum {
    REGULAR("REGULAR"),
    RATE_BASED("RATE_BASED"),
    GROUP("GROUP");

    public final String value;

    private WafRuleTypeEnum(String value) {
        this.value = value;
    }
}
