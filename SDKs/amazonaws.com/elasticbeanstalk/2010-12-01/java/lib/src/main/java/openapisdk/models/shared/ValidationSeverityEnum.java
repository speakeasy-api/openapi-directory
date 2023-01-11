package openapisdk.models.shared;


public enum ValidationSeverityEnum {
    ERROR("error"),
    WARNING("warning");

    public final String value;

    private ValidationSeverityEnum(String value) {
        this.value = value;
    }
}
