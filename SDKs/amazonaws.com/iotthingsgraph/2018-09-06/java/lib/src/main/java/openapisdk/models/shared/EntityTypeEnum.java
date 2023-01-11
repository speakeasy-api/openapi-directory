package openapisdk.models.shared;


public enum EntityTypeEnum {
    DEVICE("DEVICE"),
    SERVICE("SERVICE"),
    DEVICE_MODEL("DEVICE_MODEL"),
    CAPABILITY("CAPABILITY"),
    STATE("STATE"),
    ACTION("ACTION"),
    EVENT("EVENT"),
    PROPERTY("PROPERTY"),
    MAPPING("MAPPING"),
    ENUM_("ENUM");

    public final String value;

    private EntityTypeEnum(String value) {
        this.value = value;
    }
}
