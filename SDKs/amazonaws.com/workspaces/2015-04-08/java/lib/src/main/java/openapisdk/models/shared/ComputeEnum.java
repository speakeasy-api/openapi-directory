package openapisdk.models.shared;


public enum ComputeEnum {
    VALUE("VALUE"),
    STANDARD("STANDARD"),
    PERFORMANCE("PERFORMANCE"),
    POWER("POWER"),
    GRAPHICS("GRAPHICS"),
    POWERPRO("POWERPRO"),
    GRAPHICSPRO("GRAPHICSPRO");

    public final String value;

    private ComputeEnum(String value) {
        this.value = value;
    }
}
