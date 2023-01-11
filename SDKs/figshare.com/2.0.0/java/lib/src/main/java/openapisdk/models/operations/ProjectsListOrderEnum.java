package openapisdk.models.operations;


public enum ProjectsListOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views");

    public final String value;

    private ProjectsListOrderEnum(String value) {
        this.value = value;
    }
}
