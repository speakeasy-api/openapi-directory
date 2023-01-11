package openapisdk.models.shared;


public enum CannedAclEnum {
    PRIVATE_("private"),
    PUBLIC_READ("public-read"),
    PUBLIC_READ_WRITE("public-read-write"),
    AWS_EXEC_READ("aws-exec-read"),
    AUTHENTICATED_READ("authenticated-read"),
    BUCKET_OWNER_READ("bucket-owner-read"),
    BUCKET_OWNER_FULL_CONTROL("bucket-owner-full-control");

    public final String value;

    private CannedAclEnum(String value) {
        this.value = value;
    }
}
