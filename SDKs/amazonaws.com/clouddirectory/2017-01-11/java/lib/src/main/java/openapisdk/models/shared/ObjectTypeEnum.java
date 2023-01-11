package openapisdk.models.shared;


public enum ObjectTypeEnum {
    NODE("NODE"),
    LEAF_NODE("LEAF_NODE"),
    POLICY("POLICY"),
    INDEX("INDEX");

    public final String value;

    private ObjectTypeEnum(String value) {
        this.value = value;
    }
}
