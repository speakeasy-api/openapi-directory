package openapisdk.models.shared;


public enum AnomalySeverityEnum {
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH");

    public final String value;

    private AnomalySeverityEnum(String value) {
        this.value = value;
    }
}
