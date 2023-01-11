package openapisdk.models.shared;


public enum AuthenticationTypeEnum {
    PASSWORD("password"),
    NO_PASSWORD("no-password");

    public final String value;

    private AuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
