package openapisdk.models.shared;


public enum S3ObjectAclEnum {
    PUBLIC_READ("PUBLIC_READ"),
    BUCKET_OWNER_FULL_CONTROL("BUCKET_OWNER_FULL_CONTROL");

    public final String value;

    private S3ObjectAclEnum(String value) {
        this.value = value;
    }
}
