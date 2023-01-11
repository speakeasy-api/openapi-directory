package openapisdk.models.shared;


public enum RiskLevelTypeEnum {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High");

    public final String value;

    private RiskLevelTypeEnum(String value) {
        this.value = value;
    }
}
