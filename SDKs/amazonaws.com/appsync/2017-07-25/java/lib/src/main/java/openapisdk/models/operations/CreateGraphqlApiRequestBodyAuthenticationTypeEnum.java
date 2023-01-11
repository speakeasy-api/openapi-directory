package openapisdk.models.operations;


public enum CreateGraphqlApiRequestBodyAuthenticationTypeEnum {
    API_KEY("API_KEY"),
    AWS_IAM("AWS_IAM"),
    AMAZON_COGNITO_USER_POOLS("AMAZON_COGNITO_USER_POOLS"),
    OPENID_CONNECT("OPENID_CONNECT"),
    AWS_LAMBDA("AWS_LAMBDA");

    public final String value;

    private CreateGraphqlApiRequestBodyAuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
