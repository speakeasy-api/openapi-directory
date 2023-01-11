package openapisdk.models.shared;


public enum ConnectionAuthorizationTypeEnum {
    BASIC("BASIC"),
    OAUTH_CLIENT_CREDENTIALS("OAUTH_CLIENT_CREDENTIALS"),
    API_KEY("API_KEY");

    public final String value;

    private ConnectionAuthorizationTypeEnum(String value) {
        this.value = value;
    }
}
