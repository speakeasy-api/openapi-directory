package openapisdk.models.shared;


public enum AlarmStateEnum {
    OK("OK"),
    ALARM("ALARM"),
    INSUFFICIENT_DATA("INSUFFICIENT_DATA");

    public final String value;

    private AlarmStateEnum(String value) {
        this.value = value;
    }
}
