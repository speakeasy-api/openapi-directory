package openapisdk.models.shared;


public enum GidEnum {
    NONE("NONE"),
    INT_VALUE("INT_VALUE"),
    NAME("NAME"),
    BOTH("BOTH");

    public final String value;

    private GidEnum(String value) {
        this.value = value;
    }
}
