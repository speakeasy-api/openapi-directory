package openapisdk.models.shared;


public enum SimpleCriterionKeyForJobEnum {
    ACCOUNT_ID("ACCOUNT_ID"),
    S3_BUCKET_NAME("S3_BUCKET_NAME"),
    S3_BUCKET_EFFECTIVE_PERMISSION("S3_BUCKET_EFFECTIVE_PERMISSION"),
    S3_BUCKET_SHARED_ACCESS("S3_BUCKET_SHARED_ACCESS");

    public final String value;

    private SimpleCriterionKeyForJobEnum(String value) {
        this.value = value;
    }
}
