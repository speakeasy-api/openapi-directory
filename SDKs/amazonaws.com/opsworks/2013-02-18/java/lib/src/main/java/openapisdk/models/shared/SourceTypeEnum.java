package openapisdk.models.shared;


public enum SourceTypeEnum {
    GIT("git"),
    SVN("svn"),
    ARCHIVE("archive"),
    S3("s3");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
