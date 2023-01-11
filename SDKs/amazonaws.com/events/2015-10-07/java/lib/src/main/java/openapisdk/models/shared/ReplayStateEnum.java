package openapisdk.models.shared;


public enum ReplayStateEnum {
    STARTING("STARTING"),
    RUNNING("RUNNING"),
    CANCELLING("CANCELLING"),
    COMPLETED("COMPLETED"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED");

    public final String value;

    private ReplayStateEnum(String value) {
        this.value = value;
    }
}
