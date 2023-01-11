package openapisdk.models.shared;


public enum AuthTypeEnum {
    OAUTH2("oauth2"),
    API_KEY("apiKey"),
    BASIC("basic"),
    CUSTOM("custom"),
    NONE("none");

    public final String value;

    private AuthTypeEnum(String value) {
        this.value = value;
    }
}
