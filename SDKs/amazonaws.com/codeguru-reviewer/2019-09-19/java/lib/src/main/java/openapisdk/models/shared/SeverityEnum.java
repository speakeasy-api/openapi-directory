package openapisdk.models.shared;


public enum SeverityEnum {
    INFO("Info"),
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High"),
    CRITICAL("Critical");

    public final String value;

    private SeverityEnum(String value) {
        this.value = value;
    }
}
