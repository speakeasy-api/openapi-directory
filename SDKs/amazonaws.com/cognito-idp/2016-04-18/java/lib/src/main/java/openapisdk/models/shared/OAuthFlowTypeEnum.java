package openapisdk.models.shared;


public enum OAuthFlowTypeEnum {
    CODE("code"),
    IMPLICIT("implicit"),
    CLIENT_CREDENTIALS("client_credentials");

    public final String value;

    private OAuthFlowTypeEnum(String value) {
        this.value = value;
    }
}
