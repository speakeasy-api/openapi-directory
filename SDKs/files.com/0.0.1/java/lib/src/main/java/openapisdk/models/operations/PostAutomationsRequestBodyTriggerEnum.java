package openapisdk.models.operations;


public enum PostAutomationsRequestBodyTriggerEnum {
    REALTIME("realtime"),
    DAILY("daily"),
    CUSTOM_SCHEDULE("custom_schedule"),
    WEBHOOK("webhook"),
    EMAIL("email"),
    ACTION("action");

    public final String value;

    private PostAutomationsRequestBodyTriggerEnum(String value) {
        this.value = value;
    }
}
