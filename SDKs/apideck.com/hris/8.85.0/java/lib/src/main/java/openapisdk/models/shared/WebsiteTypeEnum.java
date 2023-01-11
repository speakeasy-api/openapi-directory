package openapisdk.models.shared;


public enum WebsiteTypeEnum {
    PRIMARY("primary"),
    SECONDARY("secondary"),
    WORK("work"),
    PERSONAL("personal"),
    OTHER("other");

    public final String value;

    private WebsiteTypeEnum(String value) {
        this.value = value;
    }
}
