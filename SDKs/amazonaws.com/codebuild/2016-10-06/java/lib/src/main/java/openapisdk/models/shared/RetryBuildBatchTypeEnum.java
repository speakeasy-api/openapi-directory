package openapisdk.models.shared;


public enum RetryBuildBatchTypeEnum {
    RETRY_ALL_BUILDS("RETRY_ALL_BUILDS"),
    RETRY_FAILED_BUILDS("RETRY_FAILED_BUILDS");

    public final String value;

    private RetryBuildBatchTypeEnum(String value) {
        this.value = value;
    }
}
