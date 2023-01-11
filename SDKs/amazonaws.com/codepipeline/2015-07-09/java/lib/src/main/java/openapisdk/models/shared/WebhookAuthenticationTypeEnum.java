package openapisdk.models.shared;


public enum WebhookAuthenticationTypeEnum {
    GITHUB_HMAC("GITHUB_HMAC"),
    IP("IP"),
    UNAUTHENTICATED("UNAUTHENTICATED");

    public final String value;

    private WebhookAuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
