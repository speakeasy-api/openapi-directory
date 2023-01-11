package openapisdk.models.shared;


public enum AuthFlowTypeEnum {
    USER_SRP_AUTH("USER_SRP_AUTH"),
    REFRESH_TOKEN_AUTH("REFRESH_TOKEN_AUTH"),
    REFRESH_TOKEN("REFRESH_TOKEN"),
    CUSTOM_AUTH("CUSTOM_AUTH"),
    ADMIN_NO_SRP_AUTH("ADMIN_NO_SRP_AUTH"),
    USER_PASSWORD_AUTH("USER_PASSWORD_AUTH"),
    ADMIN_USER_PASSWORD_AUTH("ADMIN_USER_PASSWORD_AUTH");

    public final String value;

    private AuthFlowTypeEnum(String value) {
        this.value = value;
    }
}
