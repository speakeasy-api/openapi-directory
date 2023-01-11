package openapisdk.models.shared;


public enum MailboxExportJobStateEnum {
    RUNNING("RUNNING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private MailboxExportJobStateEnum(String value) {
        this.value = value;
    }
}
