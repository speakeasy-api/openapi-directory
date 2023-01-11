package openapisdk.models.shared;


public enum StoryResponseSourceEnum {
    WEB("web"),
    EMAIL("email"),
    MOBILE("mobile"),
    API("api"),
    UNKNOWN("unknown");

    public final String value;

    private StoryResponseSourceEnum(String value) {
        this.value = value;
    }
}
