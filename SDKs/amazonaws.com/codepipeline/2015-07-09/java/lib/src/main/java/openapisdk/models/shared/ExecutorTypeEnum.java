package openapisdk.models.shared;


public enum ExecutorTypeEnum {
    JOB_WORKER("JobWorker"),
    LAMBDA("Lambda");

    public final String value;

    private ExecutorTypeEnum(String value) {
        this.value = value;
    }
}
