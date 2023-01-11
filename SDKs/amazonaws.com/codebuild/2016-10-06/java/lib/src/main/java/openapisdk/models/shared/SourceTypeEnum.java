package openapisdk.models.shared;


public enum SourceTypeEnum {
    CODECOMMIT("CODECOMMIT"),
    CODEPIPELINE("CODEPIPELINE"),
    GITHUB("GITHUB"),
    S3("S3"),
    BITBUCKET("BITBUCKET"),
    GITHUB_ENTERPRISE("GITHUB_ENTERPRISE"),
    NO_SOURCE("NO_SOURCE");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
