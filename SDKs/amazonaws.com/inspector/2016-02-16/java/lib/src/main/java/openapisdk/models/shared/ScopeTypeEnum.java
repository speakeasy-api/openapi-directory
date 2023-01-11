package openapisdk.models.shared;


public enum ScopeTypeEnum {
    INSTANCE_ID("INSTANCE_ID"),
    RULES_PACKAGE_ARN("RULES_PACKAGE_ARN");

    public final String value;

    private ScopeTypeEnum(String value) {
        this.value = value;
    }
}
