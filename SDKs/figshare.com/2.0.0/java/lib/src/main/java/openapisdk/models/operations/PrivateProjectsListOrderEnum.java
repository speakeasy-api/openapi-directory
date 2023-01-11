package openapisdk.models.operations;


public enum PrivateProjectsListOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views");

    public final String value;

    private PrivateProjectsListOrderEnum(String value) {
        this.value = value;
    }
}
