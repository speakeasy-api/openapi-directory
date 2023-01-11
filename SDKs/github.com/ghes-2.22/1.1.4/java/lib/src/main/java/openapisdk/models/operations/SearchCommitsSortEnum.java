package openapisdk.models.operations;


public enum SearchCommitsSortEnum {
    AUTHOR_DATE("author-date"),
    COMMITTER_DATE("committer-date");

    public final String value;

    private SearchCommitsSortEnum(String value) {
        this.value = value;
    }
}
