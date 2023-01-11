package openapisdk.models.shared;


public enum StatusEnum {
    ENABLED("ENABLED"),
    ENABLING("ENABLING"),
    DISABLED("DISABLED"),
    DISABLING("DISABLING");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
