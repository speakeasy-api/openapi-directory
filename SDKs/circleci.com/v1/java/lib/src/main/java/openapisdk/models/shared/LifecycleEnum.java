package openapisdk.models.shared;


public enum LifecycleEnum {
    QUEUED("queued"),
    SCHEDULED("scheduled"),
    NOT_RUN("not_run"),
    NOT_RUNNING("not_running"),
    RUNNING("running"),
    FINISHED("finished");

    public final String value;

    private LifecycleEnum(String value) {
        this.value = value;
    }
}
