package openapisdk.models.shared;


public enum ResourceTypeEnum {
    DEVICE_CERTIFICATE("DEVICE_CERTIFICATE"),
    CA_CERTIFICATE("CA_CERTIFICATE"),
    IOT_POLICY("IOT_POLICY"),
    COGNITO_IDENTITY_POOL("COGNITO_IDENTITY_POOL"),
    CLIENT_ID("CLIENT_ID"),
    ACCOUNT_SETTINGS("ACCOUNT_SETTINGS"),
    ROLE_ALIAS("ROLE_ALIAS"),
    IAM_ROLE("IAM_ROLE");

    public final String value;

    private ResourceTypeEnum(String value) {
        this.value = value;
    }
}
