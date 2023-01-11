package openapisdk.models.shared;


public enum EntityFilterNameEnum {
    NAME("NAME"),
    NAMESPACE("NAMESPACE"),
    SEMANTIC_TYPE_PATH("SEMANTIC_TYPE_PATH"),
    REFERENCED_ENTITY_ID("REFERENCED_ENTITY_ID");

    public final String value;

    private EntityFilterNameEnum(String value) {
        this.value = value;
    }
}
