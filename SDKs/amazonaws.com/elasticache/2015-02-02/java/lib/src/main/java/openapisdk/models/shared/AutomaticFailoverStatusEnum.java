package openapisdk.models.shared;


public enum AutomaticFailoverStatusEnum {
    ENABLED("enabled"),
    DISABLED("disabled"),
    ENABLING("enabling"),
    DISABLING("disabling");

    public final String value;

    private AutomaticFailoverStatusEnum(String value) {
        this.value = value;
    }
}
