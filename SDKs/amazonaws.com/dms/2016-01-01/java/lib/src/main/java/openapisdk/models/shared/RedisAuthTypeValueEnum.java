package openapisdk.models.shared;


public enum RedisAuthTypeValueEnum {
    NONE("none"),
    AUTH_ROLE("auth-role"),
    AUTH_TOKEN("auth-token");

    public final String value;

    private RedisAuthTypeValueEnum(String value) {
        this.value = value;
    }
}
