package openapisdk.models.shared;


public enum QualityFilterEnum {
    NONE("NONE"),
    AUTO("AUTO"),
    LOW("LOW"),
    MEDIUM("MEDIUM"),
    HIGH("HIGH");

    public final String value;

    private QualityFilterEnum(String value) {
        this.value = value;
    }
}
