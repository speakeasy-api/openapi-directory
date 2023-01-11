package openapisdk.models.shared;


public enum AuthModeEnum {
    IAM("IAM"),
    SSO("SSO");

    public final String value;

    private AuthModeEnum(String value) {
        this.value = value;
    }
}
