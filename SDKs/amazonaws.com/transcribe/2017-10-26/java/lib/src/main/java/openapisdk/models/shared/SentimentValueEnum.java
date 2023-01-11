package openapisdk.models.shared;


public enum SentimentValueEnum {
    POSITIVE("POSITIVE"),
    NEGATIVE("NEGATIVE"),
    NEUTRAL("NEUTRAL"),
    MIXED("MIXED");

    public final String value;

    private SentimentValueEnum(String value) {
        this.value = value;
    }
}
