package openapisdk.models.shared;


public enum OriginRequestPolicyCookieBehaviorEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL("all");

    public final String value;

    private OriginRequestPolicyCookieBehaviorEnum(String value) {
        this.value = value;
    }
}
