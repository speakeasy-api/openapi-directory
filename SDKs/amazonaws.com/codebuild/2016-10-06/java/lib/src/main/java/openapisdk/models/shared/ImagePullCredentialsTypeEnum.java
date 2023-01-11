package openapisdk.models.shared;


public enum ImagePullCredentialsTypeEnum {
    CODEBUILD("CODEBUILD"),
    SERVICE_ROLE("SERVICE_ROLE");

    public final String value;

    private ImagePullCredentialsTypeEnum(String value) {
        this.value = value;
    }
}
