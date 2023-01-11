package openapisdk.models.shared;


public enum AuditCheckRunStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    WAITING_FOR_DATA_COLLECTION("WAITING_FOR_DATA_COLLECTION"),
    CANCELED("CANCELED"),
    COMPLETED_COMPLIANT("COMPLETED_COMPLIANT"),
    COMPLETED_NON_COMPLIANT("COMPLETED_NON_COMPLIANT"),
    FAILED("FAILED");

    public final String value;

    private AuditCheckRunStatusEnum(String value) {
        this.value = value;
    }
}
