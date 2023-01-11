package openapisdk.models.shared;


public enum FeedbackTypeEnum {
    POSITIVE("Positive"),
    NEGATIVE("Negative");

    public final String value;

    private FeedbackTypeEnum(String value) {
        this.value = value;
    }
}
