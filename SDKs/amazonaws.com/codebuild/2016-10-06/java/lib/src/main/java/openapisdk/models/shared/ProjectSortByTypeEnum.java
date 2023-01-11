package openapisdk.models.shared;


public enum ProjectSortByTypeEnum {
    NAME("NAME"),
    CREATED_TIME("CREATED_TIME"),
    LAST_MODIFIED_TIME("LAST_MODIFIED_TIME");

    public final String value;

    private ProjectSortByTypeEnum(String value) {
        this.value = value;
    }
}
