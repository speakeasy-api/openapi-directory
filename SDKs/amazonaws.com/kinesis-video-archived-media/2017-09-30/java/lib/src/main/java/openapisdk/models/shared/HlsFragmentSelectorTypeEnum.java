package openapisdk.models.shared;


public enum HlsFragmentSelectorTypeEnum {
    PRODUCER_TIMESTAMP("PRODUCER_TIMESTAMP"),
    SERVER_TIMESTAMP("SERVER_TIMESTAMP");

    public final String value;

    private HlsFragmentSelectorTypeEnum(String value) {
        this.value = value;
    }
}
