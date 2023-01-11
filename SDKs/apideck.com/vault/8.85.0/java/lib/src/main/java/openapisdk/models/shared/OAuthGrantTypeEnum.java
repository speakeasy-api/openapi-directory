package openapisdk.models.shared;


public enum OAuthGrantTypeEnum {
    AUTHORIZATION_CODE("authorization_code"),
    CLIENT_CREDENTIALS("client_credentials"),
    PASSWORD("password");

    public final String value;

    private OAuthGrantTypeEnum(String value) {
        this.value = value;
    }
}
