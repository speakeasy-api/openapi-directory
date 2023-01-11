package openapisdk.models.shared;


public enum AccessControlRuleEffectEnum {
    ALLOW("ALLOW"),
    DENY("DENY");

    public final String value;

    private AccessControlRuleEffectEnum(String value) {
        this.value = value;
    }
}
