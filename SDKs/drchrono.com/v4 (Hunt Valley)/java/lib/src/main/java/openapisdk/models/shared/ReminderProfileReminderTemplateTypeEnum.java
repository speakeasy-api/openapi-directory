package openapisdk.models.shared;


public enum ReminderProfileReminderTemplateTypeEnum {
    EMAIL("email"),
    SMS("sms"),
    PHONE("phone"),
    AUTO_CALL("auto_call");

    public final String value;

    private ReminderProfileReminderTemplateTypeEnum(String value) {
        this.value = value;
    }
}
