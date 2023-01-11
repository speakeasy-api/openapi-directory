package openapisdk.models.shared;


public enum StartSelectorTypeEnum {
    FRAGMENT_NUMBER("FRAGMENT_NUMBER"),
    SERVER_TIMESTAMP("SERVER_TIMESTAMP"),
    PRODUCER_TIMESTAMP("PRODUCER_TIMESTAMP"),
    NOW("NOW"),
    EARLIEST("EARLIEST"),
    CONTINUATION_TOKEN("CONTINUATION_TOKEN");

    public final String value;

    private StartSelectorTypeEnum(String value) {
        this.value = value;
    }
}
