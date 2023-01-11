package openapisdk.models.shared;


public enum ArtifactsTypeEnum {
    CODEPIPELINE("CODEPIPELINE"),
    S3("S3"),
    NO_ARTIFACTS("NO_ARTIFACTS");

    public final String value;

    private ArtifactsTypeEnum(String value) {
        this.value = value;
    }
}
