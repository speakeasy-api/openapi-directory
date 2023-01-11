package openapisdk.models.shared;


public enum ParameterTypeEnum {
    DEFAULT_("DEFAULT"),
    NODE_TYPE_SPECIFIC("NODE_TYPE_SPECIFIC");

    public final String value;

    private ParameterTypeEnum(String value) {
        this.value = value;
    }
}
