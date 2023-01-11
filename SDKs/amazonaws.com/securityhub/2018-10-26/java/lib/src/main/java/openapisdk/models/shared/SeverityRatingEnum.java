package openapisdk.models.shared;


public enum SeverityRatingEnum {
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH"),
    CRITICAL("CRITICAL");

    public final String value;

    private SeverityRatingEnum(String value) {
        this.value = value;
    }
}
