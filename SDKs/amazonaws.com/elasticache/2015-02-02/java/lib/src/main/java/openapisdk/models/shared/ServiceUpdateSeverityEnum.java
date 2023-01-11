package openapisdk.models.shared;


public enum ServiceUpdateSeverityEnum {
    CRITICAL("critical"),
    IMPORTANT("important"),
    MEDIUM("medium"),
    LOW("low");

    public final String value;

    private ServiceUpdateSeverityEnum(String value) {
        this.value = value;
    }
}
