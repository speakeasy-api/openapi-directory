package openapisdk.models.shared;


public enum ReceivedStatusEnum {
    PENDING_WORKFLOW("PENDING_WORKFLOW"),
    PENDING_ACCEPT("PENDING_ACCEPT"),
    REJECTED("REJECTED"),
    ACTIVE("ACTIVE"),
    FAILED_WORKFLOW("FAILED_WORKFLOW"),
    DELETED("DELETED"),
    DISABLED("DISABLED"),
    WORKFLOW_COMPLETED("WORKFLOW_COMPLETED");

    public final String value;

    private ReceivedStatusEnum(String value) {
        this.value = value;
    }
}
