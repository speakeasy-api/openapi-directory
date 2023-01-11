package openapisdk.models.shared;


public enum BackupStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    OK("OK"),
    FAILED("FAILED"),
    DELETING("DELETING");

    public final String value;

    private BackupStatusEnum(String value) {
        this.value = value;
    }
}
