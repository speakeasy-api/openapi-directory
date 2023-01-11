package openapisdk.models.shared;


public enum PortInfoSourceTypeEnum {
    DEFAULT_("DEFAULT"),
    INSTANCE("INSTANCE"),
    NONE("NONE"),
    CLOSED("CLOSED");

    public final String value;

    private PortInfoSourceTypeEnum(String value) {
        this.value = value;
    }
}
