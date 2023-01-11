package openapisdk.models.shared;


public enum SentimentTypeEnum {
    POSITIVE("POSITIVE"),
    NEGATIVE("NEGATIVE"),
    NEUTRAL("NEUTRAL"),
    MIXED("MIXED");

    public final String value;

    private SentimentTypeEnum(String value) {
        this.value = value;
    }
}
