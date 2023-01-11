package openapisdk.models.shared;


public enum DataPullModeEnum {
    INCREMENTAL("Incremental"),
    COMPLETE("Complete");

    public final String value;

    private DataPullModeEnum(String value) {
        this.value = value;
    }
}
