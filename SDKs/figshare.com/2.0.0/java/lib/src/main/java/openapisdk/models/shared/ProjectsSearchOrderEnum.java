package openapisdk.models.shared;


public enum ProjectsSearchOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views");

    public final String value;

    private ProjectsSearchOrderEnum(String value) {
        this.value = value;
    }
}
