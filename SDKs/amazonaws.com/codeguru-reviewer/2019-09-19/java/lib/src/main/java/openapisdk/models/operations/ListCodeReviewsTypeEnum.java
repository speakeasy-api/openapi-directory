package openapisdk.models.operations;


public enum ListCodeReviewsTypeEnum {
    PULL_REQUEST("PullRequest"),
    REPOSITORY_ANALYSIS("RepositoryAnalysis");

    public final String value;

    private ListCodeReviewsTypeEnum(String value) {
        this.value = value;
    }
}
