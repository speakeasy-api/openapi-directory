package openapisdk.models.shared;


public enum FindingSourceTypeEnum {
    POLICY("POLICY"),
    BUCKET_ACL("BUCKET_ACL"),
    S3_ACCESS_POINT("S3_ACCESS_POINT");

    public final String value;

    private FindingSourceTypeEnum(String value) {
        this.value = value;
    }
}
