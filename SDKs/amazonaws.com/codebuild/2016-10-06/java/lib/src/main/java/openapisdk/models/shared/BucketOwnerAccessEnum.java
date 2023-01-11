package openapisdk.models.shared;


public enum BucketOwnerAccessEnum {
    NONE("NONE"),
    READ_ONLY("READ_ONLY"),
    FULL("FULL");

    public final String value;

    private BucketOwnerAccessEnum(String value) {
        this.value = value;
    }
}
