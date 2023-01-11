package openapisdk.models.shared;


public enum TypeEnum {
    PULL_REQUEST("PullRequest"),
    REPOSITORY_ANALYSIS("RepositoryAnalysis");

    public final String value;

    private TypeEnum(String value) {
        this.value = value;
    }
}
