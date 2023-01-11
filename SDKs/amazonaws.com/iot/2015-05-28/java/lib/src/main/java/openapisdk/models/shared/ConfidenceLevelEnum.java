package openapisdk.models.shared;


public enum ConfidenceLevelEnum {
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH");

    public final String value;

    private ConfidenceLevelEnum(String value) {
        this.value = value;
    }
}
