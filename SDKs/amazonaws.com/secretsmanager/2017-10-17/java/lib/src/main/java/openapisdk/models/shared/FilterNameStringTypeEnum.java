package openapisdk.models.shared;


public enum FilterNameStringTypeEnum {
    DESCRIPTION("description"),
    NAME("name"),
    TAG_KEY("tag-key"),
    TAG_VALUE("tag-value"),
    PRIMARY_REGION("primary-region"),
    ALL("all");

    public final String value;

    private FilterNameStringTypeEnum(String value) {
        this.value = value;
    }
}
