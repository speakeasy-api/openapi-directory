package openapisdk.models.shared;


public enum SeverityEnum {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High"),
    INFORMATIONAL("Informational"),
    UNDEFINED("Undefined");

    public final String value;

    private SeverityEnum(String value) {
        this.value = value;
    }
}
