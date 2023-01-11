package openapisdk.models.shared;


public enum RuleTypeOptionEnum {
    FORWARD("FORWARD"),
    SYSTEM("SYSTEM"),
    RECURSIVE("RECURSIVE");

    public final String value;

    private RuleTypeOptionEnum(String value) {
        this.value = value;
    }
}
