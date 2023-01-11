package openapisdk.models.operations;


public enum ListAuditMitigationActionsExecutionsActionStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELED("CANCELED"),
    SKIPPED("SKIPPED"),
    PENDING("PENDING");

    public final String value;

    private ListAuditMitigationActionsExecutionsActionStatusEnum(String value) {
        this.value = value;
    }
}
