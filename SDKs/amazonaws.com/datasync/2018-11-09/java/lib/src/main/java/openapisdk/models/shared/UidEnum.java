package openapisdk.models.shared;


public enum UidEnum {
    NONE("NONE"),
    INT_VALUE("INT_VALUE"),
    NAME("NAME"),
    BOTH("BOTH");

    public final String value;

    private UidEnum(String value) {
        this.value = value;
    }
}
