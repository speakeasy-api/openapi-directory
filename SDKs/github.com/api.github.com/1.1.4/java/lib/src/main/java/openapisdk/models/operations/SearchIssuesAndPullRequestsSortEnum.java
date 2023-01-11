package openapisdk.models.operations;


public enum SearchIssuesAndPullRequestsSortEnum {
    COMMENTS("comments"),
    REACTIONS("reactions"),
    REACTIONS_PLUS1("reactions-+1"),
    REACTIONS1("reactions--1"),
    REACTIONS_SMILE("reactions-smile"),
    REACTIONS_THINKING_FACE("reactions-thinking_face"),
    REACTIONS_HEART("reactions-heart"),
    REACTIONS_TADA("reactions-tada"),
    INTERACTIONS("interactions"),
    CREATED("created"),
    UPDATED("updated");

    public final String value;

    private SearchIssuesAndPullRequestsSortEnum(String value) {
        this.value = value;
    }
}
