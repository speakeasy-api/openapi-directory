package openapisdk.models.shared;


public enum SentimentValueEnum {
    POSITIVE("POSITIVE"),
    NEUTRAL("NEUTRAL"),
    NEGATIVE("NEGATIVE");

    public final String value;

    private SentimentValueEnum(String value) {
        this.value = value;
    }
}
