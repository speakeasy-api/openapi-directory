package openapisdk.models.shared;


public enum ValidatePolicyFindingTypeEnum {
    ERROR("ERROR"),
    SECURITY_WARNING("SECURITY_WARNING"),
    SUGGESTION("SUGGESTION"),
    WARNING("WARNING");

    public final String value;

    private ValidatePolicyFindingTypeEnum(String value) {
        this.value = value;
    }
}
