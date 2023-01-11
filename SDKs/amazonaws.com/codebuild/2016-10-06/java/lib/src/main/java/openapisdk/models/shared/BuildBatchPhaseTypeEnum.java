package openapisdk.models.shared;


public enum BuildBatchPhaseTypeEnum {
    SUBMITTED("SUBMITTED"),
    DOWNLOAD_BATCHSPEC("DOWNLOAD_BATCHSPEC"),
    IN_PROGRESS("IN_PROGRESS"),
    COMBINE_ARTIFACTS("COMBINE_ARTIFACTS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    STOPPED("STOPPED");

    public final String value;

    private BuildBatchPhaseTypeEnum(String value) {
        this.value = value;
    }
}
