package openapisdk.models.shared;


public enum OriginRequestPolicyQueryStringBehaviorEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL("all");

    public final String value;

    private OriginRequestPolicyQueryStringBehaviorEnum(String value) {
        this.value = value;
    }
}
