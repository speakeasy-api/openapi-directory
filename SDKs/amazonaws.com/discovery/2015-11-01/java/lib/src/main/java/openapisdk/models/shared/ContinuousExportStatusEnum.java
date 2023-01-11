package openapisdk.models.shared;


public enum ContinuousExportStatusEnum {
    START_IN_PROGRESS("START_IN_PROGRESS"),
    START_FAILED("START_FAILED"),
    ACTIVE("ACTIVE"),
    ERROR("ERROR"),
    STOP_IN_PROGRESS("STOP_IN_PROGRESS"),
    STOP_FAILED("STOP_FAILED"),
    INACTIVE("INACTIVE");

    public final String value;

    private ContinuousExportStatusEnum(String value) {
        this.value = value;
    }
}
