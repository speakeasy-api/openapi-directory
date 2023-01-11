package openapisdk.models.shared;


public enum DimensionValueSourceEnum {
    MESSAGE_TAG("MESSAGE_TAG"),
    EMAIL_HEADER("EMAIL_HEADER"),
    LINK_TAG("LINK_TAG");

    public final String value;

    private DimensionValueSourceEnum(String value) {
        this.value = value;
    }
}
