package openapisdk.models.shared;


public enum ObjectTypeEnumEnum {
    ASSESSMENT("ASSESSMENT"),
    CONTROL_SET("CONTROL_SET"),
    CONTROL("CONTROL"),
    DELEGATION("DELEGATION"),
    ASSESSMENT_REPORT("ASSESSMENT_REPORT");

    public final String value;

    private ObjectTypeEnumEnum(String value) {
        this.value = value;
    }
}
