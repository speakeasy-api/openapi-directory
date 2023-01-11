package openapisdk.models.shared;


public enum ReminderProfileReminderTemplateUnitEnum {
    MINUTES("minutes"),
    HOURS("hours"),
    DAYS("days"),
    WEEKS("weeks");

    public final String value;

    private ReminderProfileReminderTemplateUnitEnum(String value) {
        this.value = value;
    }
}
