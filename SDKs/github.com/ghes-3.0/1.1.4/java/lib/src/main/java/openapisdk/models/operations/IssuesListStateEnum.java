package openapisdk.models.operations;


public enum IssuesListStateEnum {
    OPEN("open"),
    CLOSED("closed"),
    ALL("all");

    public final String value;

    private IssuesListStateEnum(String value) {
        this.value = value;
    }
}
