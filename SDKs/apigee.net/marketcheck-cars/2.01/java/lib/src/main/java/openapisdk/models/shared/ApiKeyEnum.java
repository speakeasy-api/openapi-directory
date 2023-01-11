package openapisdk.models.shared;


public enum ApiKeyEnum {
    NEW_("new"),
    USED("used");

    public final String value;

    private ApiKeyEnum(String value) {
        this.value = value;
    }
}
