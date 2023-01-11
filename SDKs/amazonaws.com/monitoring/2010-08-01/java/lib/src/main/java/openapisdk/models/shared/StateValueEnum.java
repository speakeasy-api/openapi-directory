package openapisdk.models.shared;


public enum StateValueEnum {
    OK("OK"),
    ALARM("ALARM"),
    INSUFFICIENT_DATA("INSUFFICIENT_DATA");

    public final String value;

    private StateValueEnum(String value) {
        this.value = value;
    }
}
