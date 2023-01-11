package openapisdk.models.shared;


public enum ExecutionStatusEnum {
    PENDING("PENDING"),
    PENDING_CONCURRENCY("PENDING_CONCURRENCY"),
    PENDING_DEVICE("PENDING_DEVICE"),
    PROCESSING("PROCESSING"),
    SCHEDULING("SCHEDULING"),
    PREPARING("PREPARING"),
    RUNNING("RUNNING"),
    COMPLETED("COMPLETED"),
    STOPPING("STOPPING");

    public final String value;

    private ExecutionStatusEnum(String value) {
        this.value = value;
    }
}
