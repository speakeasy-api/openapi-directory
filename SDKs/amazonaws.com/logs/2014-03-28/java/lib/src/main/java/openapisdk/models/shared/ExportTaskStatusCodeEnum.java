package openapisdk.models.shared;


public enum ExportTaskStatusCodeEnum {
    CANCELLED("CANCELLED"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    PENDING("PENDING"),
    PENDING_CANCEL("PENDING_CANCEL"),
    RUNNING("RUNNING");

    public final String value;

    private ExportTaskStatusCodeEnum(String value) {
        this.value = value;
    }
}
