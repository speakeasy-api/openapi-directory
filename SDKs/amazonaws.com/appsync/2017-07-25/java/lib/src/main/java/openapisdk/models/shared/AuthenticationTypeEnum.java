package openapisdk.models.shared;


public enum AuthenticationTypeEnum {
    API_KEY("API_KEY"),
    AWS_IAM("AWS_IAM"),
    AMAZON_COGNITO_USER_POOLS("AMAZON_COGNITO_USER_POOLS"),
    OPENID_CONNECT("OPENID_CONNECT"),
    AWS_LAMBDA("AWS_LAMBDA");

    public final String value;

    private AuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
