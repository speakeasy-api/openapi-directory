package openapisdk.models.shared;


public enum CachePolicyCookieBehaviorEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL_EXCEPT("allExcept"),
    ALL("all");

    public final String value;

    private CachePolicyCookieBehaviorEnum(String value) {
        this.value = value;
    }
}
