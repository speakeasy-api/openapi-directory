package openapisdk.models.shared;


public enum S3BucketRegionEnum {
    AP_EAST1("ap-east-1"),
    ME_SOUTH1("me-south-1"),
    EU_SOUTH1("eu-south-1"),
    AF_SOUTH1("af-south-1");

    public final String value;

    private S3BucketRegionEnum(String value) {
        this.value = value;
    }
}
