package openapisdk.models.shared;


public enum InsightFeedbackOptionEnum {
    VALID_COLLECTION("VALID_COLLECTION"),
    RECOMMENDATION_USEFUL("RECOMMENDATION_USEFUL"),
    ALERT_TOO_SENSITIVE("ALERT_TOO_SENSITIVE"),
    DATA_NOISY_ANOMALY("DATA_NOISY_ANOMALY"),
    DATA_INCORRECT("DATA_INCORRECT");

    public final String value;

    private InsightFeedbackOptionEnum(String value) {
        this.value = value;
    }
}
