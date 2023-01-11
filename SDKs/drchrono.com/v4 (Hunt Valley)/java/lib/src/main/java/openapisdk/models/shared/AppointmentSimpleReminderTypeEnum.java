package openapisdk.models.shared;


public enum AppointmentSimpleReminderTypeEnum {
    EMAIL("email"),
    SMS("sms"),
    PHONE("phone"),
    AUTO_CALL("auto_call");

    public final String value;

    private AppointmentSimpleReminderTypeEnum(String value) {
        this.value = value;
    }
}
