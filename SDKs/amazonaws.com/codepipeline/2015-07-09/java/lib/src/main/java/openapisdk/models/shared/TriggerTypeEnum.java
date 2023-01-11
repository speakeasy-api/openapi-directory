package openapisdk.models.shared;


public enum TriggerTypeEnum {
    CREATE_PIPELINE("CreatePipeline"),
    START_PIPELINE_EXECUTION("StartPipelineExecution"),
    POLL_FOR_SOURCE_CHANGES("PollForSourceChanges"),
    WEBHOOK("Webhook"),
    CLOUD_WATCH_EVENT("CloudWatchEvent"),
    PUT_ACTION_REVISION("PutActionRevision");

    public final String value;

    private TriggerTypeEnum(String value) {
        this.value = value;
    }
}
