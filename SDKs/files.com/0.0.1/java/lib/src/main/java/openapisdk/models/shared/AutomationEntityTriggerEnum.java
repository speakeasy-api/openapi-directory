package openapisdk.models.shared;


public enum AutomationEntityTriggerEnum {
    REALTIME("realtime"),
    DAILY("daily"),
    CUSTOM_SCHEDULE("custom_schedule"),
    WEBHOOK("webhook"),
    EMAIL("email"),
    ACTION("action");

    public final String value;

    private AutomationEntityTriggerEnum(String value) {
        this.value = value;
    }
}
