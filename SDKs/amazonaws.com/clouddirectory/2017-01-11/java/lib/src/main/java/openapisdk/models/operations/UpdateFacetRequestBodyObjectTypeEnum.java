package openapisdk.models.operations;


public enum UpdateFacetRequestBodyObjectTypeEnum {
    NODE("NODE"),
    LEAF_NODE("LEAF_NODE"),
    POLICY("POLICY"),
    INDEX("INDEX");

    public final String value;

    private UpdateFacetRequestBodyObjectTypeEnum(String value) {
        this.value = value;
    }
}
