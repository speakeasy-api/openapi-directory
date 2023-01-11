package openapisdk.models.shared;


public enum QuantumTaskStatusEnum {
    CREATED("CREATED"),
    QUEUED("QUEUED"),
    RUNNING("RUNNING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED");

    public final String value;

    private QuantumTaskStatusEnum(String value) {
        this.value = value;
    }
}
