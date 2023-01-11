package openapisdk.models.shared;


public enum NamespaceDefinitionTypeEnum {
    SOURCE("source"),
    DESTINATION("destination"),
    CUSTOMFORMAT("customformat");

    public final String value;

    private NamespaceDefinitionTypeEnum(String value) {
        this.value = value;
    }
}
