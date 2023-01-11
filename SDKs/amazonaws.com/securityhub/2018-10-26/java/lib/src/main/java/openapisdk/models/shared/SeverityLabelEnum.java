package openapisdk.models.shared;


public enum SeverityLabelEnum {
    INFORMATIONAL("INFORMATIONAL"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    CRITICAL("CRITICAL");

    public final String value;

    private SeverityLabelEnum(String value) {
        this.value = value;
    }
}
