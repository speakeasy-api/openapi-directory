package openapisdk.models.shared;


public enum ExplicitAuthFlowsTypeEnum {
    ADMIN_NO_SRP_AUTH("ADMIN_NO_SRP_AUTH"),
    CUSTOM_AUTH_FLOW_ONLY("CUSTOM_AUTH_FLOW_ONLY"),
    USER_PASSWORD_AUTH("USER_PASSWORD_AUTH"),
    ALLOW_ADMIN_USER_PASSWORD_AUTH("ALLOW_ADMIN_USER_PASSWORD_AUTH"),
    ALLOW_CUSTOM_AUTH("ALLOW_CUSTOM_AUTH"),
    ALLOW_USER_PASSWORD_AUTH("ALLOW_USER_PASSWORD_AUTH"),
    ALLOW_USER_SRP_AUTH("ALLOW_USER_SRP_AUTH"),
    ALLOW_REFRESH_TOKEN_AUTH("ALLOW_REFRESH_TOKEN_AUTH");

    public final String value;

    private ExplicitAuthFlowsTypeEnum(String value) {
        this.value = value;
    }
}
