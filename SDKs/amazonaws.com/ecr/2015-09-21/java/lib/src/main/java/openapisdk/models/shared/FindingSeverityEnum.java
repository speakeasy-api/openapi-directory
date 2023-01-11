package openapisdk.models.shared;


public enum FindingSeverityEnum {
    INFORMATIONAL("INFORMATIONAL"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    CRITICAL("CRITICAL"),
    UNDEFINED("UNDEFINED");

    public final String value;

    private FindingSeverityEnum(String value) {
        this.value = value;
    }
}
