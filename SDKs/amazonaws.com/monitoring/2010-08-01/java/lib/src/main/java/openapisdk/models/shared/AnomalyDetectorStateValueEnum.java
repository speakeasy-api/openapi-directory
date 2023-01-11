package openapisdk.models.shared;


public enum AnomalyDetectorStateValueEnum {
    PENDING_TRAINING("PENDING_TRAINING"),
    TRAINED_INSUFFICIENT_DATA("TRAINED_INSUFFICIENT_DATA"),
    TRAINED("TRAINED");

    public final String value;

    private AnomalyDetectorStateValueEnum(String value) {
        this.value = value;
    }
}
