package openapisdk.models.shared;


public enum BackupTypeEnum {
    AUTOMATED("AUTOMATED"),
    MANUAL("MANUAL");

    public final String value;

    private BackupTypeEnum(String value) {
        this.value = value;
    }
}
