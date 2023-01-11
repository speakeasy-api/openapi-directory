package openapisdk.models.shared;


public enum OriginProtocolPolicyEnum {
    HTTP_ONLY("http-only"),
    MATCH_VIEWER("match-viewer"),
    HTTPS_ONLY("https-only");

    public final String value;

    private OriginProtocolPolicyEnum(String value) {
        this.value = value;
    }
}
