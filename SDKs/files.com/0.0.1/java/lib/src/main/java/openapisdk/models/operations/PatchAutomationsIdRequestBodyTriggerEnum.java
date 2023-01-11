package openapisdk.models.operations;


public enum PatchAutomationsIdRequestBodyTriggerEnum {
    REALTIME("realtime"),
    DAILY("daily"),
    CUSTOM_SCHEDULE("custom_schedule"),
    WEBHOOK("webhook"),
    EMAIL("email"),
    ACTION("action");

    public final String value;

    private PatchAutomationsIdRequestBodyTriggerEnum(String value) {
        this.value = value;
    }
}
