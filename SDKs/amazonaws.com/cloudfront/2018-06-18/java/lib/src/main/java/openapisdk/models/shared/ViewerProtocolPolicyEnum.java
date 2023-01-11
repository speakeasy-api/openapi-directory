package openapisdk.models.shared;


public enum ViewerProtocolPolicyEnum {
    ALLOW_ALL("allow-all"),
    HTTPS_ONLY("https-only"),
    REDIRECT_TO_HTTPS("redirect-to-https");

    public final String value;

    private ViewerProtocolPolicyEnum(String value) {
        this.value = value;
    }
}
