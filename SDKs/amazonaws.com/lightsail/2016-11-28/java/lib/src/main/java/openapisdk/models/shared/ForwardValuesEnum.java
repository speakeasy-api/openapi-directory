package openapisdk.models.shared;


public enum ForwardValuesEnum {
    NONE("none"),
    ALLOW_LIST("allow-list"),
    ALL("all");

    public final String value;

    private ForwardValuesEnum(String value) {
        this.value = value;
    }
}
