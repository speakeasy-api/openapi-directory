package openapisdk.models.shared;


public enum CannedAclForObjectsValueEnum {
    NONE("none"),
    PRIVATE_("private"),
    PUBLIC_READ("public-read"),
    PUBLIC_READ_WRITE("public-read-write"),
    AUTHENTICATED_READ("authenticated-read"),
    AWS_EXEC_READ("aws-exec-read"),
    BUCKET_OWNER_READ("bucket-owner-read"),
    BUCKET_OWNER_FULL_CONTROL("bucket-owner-full-control");

    public final String value;

    private CannedAclForObjectsValueEnum(String value) {
        this.value = value;
    }
}
