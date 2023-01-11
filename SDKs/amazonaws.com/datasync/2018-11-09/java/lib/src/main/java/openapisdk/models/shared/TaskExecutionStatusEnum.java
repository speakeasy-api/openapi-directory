package openapisdk.models.shared;


public enum TaskExecutionStatusEnum {
    QUEUED("QUEUED"),
    LAUNCHING("LAUNCHING"),
    PREPARING("PREPARING"),
    TRANSFERRING("TRANSFERRING"),
    VERIFYING("VERIFYING"),
    SUCCESS("SUCCESS"),
    ERROR("ERROR");

    public final String value;

    private TaskExecutionStatusEnum(String value) {
        this.value = value;
    }
}
