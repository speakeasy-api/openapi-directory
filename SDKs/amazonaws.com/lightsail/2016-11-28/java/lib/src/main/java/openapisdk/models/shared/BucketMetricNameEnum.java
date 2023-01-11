package openapisdk.models.shared;


public enum BucketMetricNameEnum {
    BUCKET_SIZE_BYTES("BucketSizeBytes"),
    NUMBER_OF_OBJECTS("NumberOfObjects");

    public final String value;

    private BucketMetricNameEnum(String value) {
        this.value = value;
    }
}
