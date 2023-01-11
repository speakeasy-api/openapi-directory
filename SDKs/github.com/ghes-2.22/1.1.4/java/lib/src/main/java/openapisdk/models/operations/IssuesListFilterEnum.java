package openapisdk.models.operations;


public enum IssuesListFilterEnum {
    ASSIGNED("assigned"),
    CREATED("created"),
    MENTIONED("mentioned"),
    SUBSCRIBED("subscribed"),
    REPOS("repos"),
    ALL("all");

    public final String value;

    private IssuesListFilterEnum(String value) {
        this.value = value;
    }
}
