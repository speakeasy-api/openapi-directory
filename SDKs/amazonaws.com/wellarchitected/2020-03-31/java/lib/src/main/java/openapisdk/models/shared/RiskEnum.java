package openapisdk.models.shared;


public enum RiskEnum {
    UNANSWERED("UNANSWERED"),
    HIGH("HIGH"),
    MEDIUM("MEDIUM"),
    NONE("NONE"),
    NOT_APPLICABLE("NOT_APPLICABLE");

    public final String value;

    private RiskEnum(String value) {
        this.value = value;
    }
}
