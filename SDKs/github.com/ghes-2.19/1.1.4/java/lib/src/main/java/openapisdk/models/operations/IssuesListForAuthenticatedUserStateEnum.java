package openapisdk.models.operations;


public enum IssuesListForAuthenticatedUserStateEnum {
    OPEN("open"),
    CLOSED("closed"),
    ALL("all");

    public final String value;

    private IssuesListForAuthenticatedUserStateEnum(String value) {
        this.value = value;
    }
}
