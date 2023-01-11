package openapisdk.models.shared;


public enum RuleTypeEnum {
    ATLEAST("ATLEAST"),
    AND("AND"),
    OR("OR");

    public final String value;

    private RuleTypeEnum(String value) {
        this.value = value;
    }
}
