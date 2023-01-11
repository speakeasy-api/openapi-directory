package openapisdk.models.shared;


public enum SeverityLevelEnum {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High");

    public final String value;

    private SeverityLevelEnum(String value) {
        this.value = value;
    }
}
