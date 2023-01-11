package openapisdk.models.operations;


public enum GetBatchesBatchStatusEnum {
    SUBMITTED("SUBMITTED"),
    REMOVED("REMOVED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private GetBatchesBatchStatusEnum(String value) {
        this.value = value;
    }
}
