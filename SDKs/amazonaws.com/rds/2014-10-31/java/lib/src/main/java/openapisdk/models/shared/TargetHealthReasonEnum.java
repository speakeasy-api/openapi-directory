package openapisdk.models.shared;


public enum TargetHealthReasonEnum {
    UNREACHABLE("UNREACHABLE"),
    CONNECTION_FAILED("CONNECTION_FAILED"),
    AUTH_FAILURE("AUTH_FAILURE"),
    PENDING_PROXY_CAPACITY("PENDING_PROXY_CAPACITY"),
    INVALID_REPLICATION_STATE("INVALID_REPLICATION_STATE");

    public final String value;

    private TargetHealthReasonEnum(String value) {
        this.value = value;
    }
}
