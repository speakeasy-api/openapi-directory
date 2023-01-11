package openapisdk.models.shared;


public enum CachePolicyTypeEnum {
    MANAGED("managed"),
    CUSTOM("custom");

    public final String value;

    private CachePolicyTypeEnum(String value) {
        this.value = value;
    }
}
