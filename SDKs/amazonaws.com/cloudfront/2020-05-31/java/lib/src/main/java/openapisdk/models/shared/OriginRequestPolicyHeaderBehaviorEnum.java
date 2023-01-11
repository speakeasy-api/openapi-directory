package openapisdk.models.shared;


public enum OriginRequestPolicyHeaderBehaviorEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL_VIEWER("allViewer"),
    ALL_VIEWER_AND_WHITELIST_CLOUD_FRONT("allViewerAndWhitelistCloudFront");

    public final String value;

    private OriginRequestPolicyHeaderBehaviorEnum(String value) {
        this.value = value;
    }
}
