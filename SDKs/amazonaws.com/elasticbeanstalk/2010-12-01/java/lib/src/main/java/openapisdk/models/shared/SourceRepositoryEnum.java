package openapisdk.models.shared;


public enum SourceRepositoryEnum {
    CODE_COMMIT("CodeCommit"),
    S3("S3");

    public final String value;

    private SourceRepositoryEnum(String value) {
        this.value = value;
    }
}
