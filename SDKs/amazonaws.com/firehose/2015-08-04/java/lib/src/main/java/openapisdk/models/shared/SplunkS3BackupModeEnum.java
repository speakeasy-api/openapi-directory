package openapisdk.models.shared;


public enum SplunkS3BackupModeEnum {
    FAILED_EVENTS_ONLY("FailedEventsOnly"),
    ALL_EVENTS("AllEvents");

    public final String value;

    private SplunkS3BackupModeEnum(String value) {
        this.value = value;
    }
}
