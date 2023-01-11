package openapisdk.models.shared;


public enum ViolationEventTypeEnum {
    IN_ALARM("in-alarm"),
    ALARM_CLEARED("alarm-cleared"),
    ALARM_INVALIDATED("alarm-invalidated");

    public final String value;

    private ViolationEventTypeEnum(String value) {
        this.value = value;
    }
}
