package openapisdk.models.operations;


public enum CreateFacetRequestBodyObjectTypeEnum {
    NODE("NODE"),
    LEAF_NODE("LEAF_NODE"),
    POLICY("POLICY"),
    INDEX("INDEX");

    public final String value;

    private CreateFacetRequestBodyObjectTypeEnum(String value) {
        this.value = value;
    }
}
