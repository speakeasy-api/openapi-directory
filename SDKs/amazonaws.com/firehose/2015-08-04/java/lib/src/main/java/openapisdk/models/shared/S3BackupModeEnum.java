package openapisdk.models.shared;


public enum S3BackupModeEnum {
    DISABLED("Disabled"),
    ENABLED("Enabled");

    public final String value;

    private S3BackupModeEnum(String value) {
        this.value = value;
    }
}
