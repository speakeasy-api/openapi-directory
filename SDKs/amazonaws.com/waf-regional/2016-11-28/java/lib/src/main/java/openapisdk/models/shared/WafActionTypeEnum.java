package openapisdk.models.shared;


public enum WafActionTypeEnum {
    BLOCK("BLOCK"),
    ALLOW("ALLOW"),
    COUNT("COUNT");

    public final String value;

    private WafActionTypeEnum(String value) {
        this.value = value;
    }
}
