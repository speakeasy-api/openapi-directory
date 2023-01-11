package openapisdk.models.shared;


public enum GrantStatusEnum {
    PENDING_WORKFLOW("PENDING_WORKFLOW"),
    PENDING_ACCEPT("PENDING_ACCEPT"),
    REJECTED("REJECTED"),
    ACTIVE("ACTIVE"),
    FAILED_WORKFLOW("FAILED_WORKFLOW"),
    DELETED("DELETED"),
    PENDING_DELETE("PENDING_DELETE"),
    DISABLED("DISABLED"),
    WORKFLOW_COMPLETED("WORKFLOW_COMPLETED");

    public final String value;

    private GrantStatusEnum(String value) {
        this.value = value;
    }
}
