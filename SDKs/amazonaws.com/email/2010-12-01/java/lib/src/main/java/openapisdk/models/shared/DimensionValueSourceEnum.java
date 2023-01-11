package openapisdk.models.shared;


public enum DimensionValueSourceEnum {
    MESSAGE_TAG("messageTag"),
    EMAIL_HEADER("emailHeader"),
    LINK_TAG("linkTag");

    public final String value;

    private DimensionValueSourceEnum(String value) {
        this.value = value;
    }
}
