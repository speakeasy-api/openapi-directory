package openapisdk.models.shared;


public enum AlarmStateNameEnum {
    DISABLED("DISABLED"),
    NORMAL("NORMAL"),
    ACTIVE("ACTIVE"),
    ACKNOWLEDGED("ACKNOWLEDGED"),
    SNOOZE_DISABLED("SNOOZE_DISABLED"),
    LATCHED("LATCHED");

    public final String value;

    private AlarmStateNameEnum(String value) {
        this.value = value;
    }
}
