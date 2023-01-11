package openapisdk.models.shared;


public enum CachePolicyQueryStringBehaviorEnum {
    NONE("none"),
    WHITELIST("whitelist"),
    ALL_EXCEPT("allExcept"),
    ALL("all");

    public final String value;

    private CachePolicyQueryStringBehaviorEnum(String value) {
        this.value = value;
    }
}
