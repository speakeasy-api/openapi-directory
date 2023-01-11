package openapisdk.models.operations;


public enum GetSeasonsSortEnum {
    CREATED_AT("created_at"),
    SORT_TITLE("sort_title"),
    TITLE("title"),
    UPDATED_AT("updated_at");

    public final String value;

    private GetSeasonsSortEnum(String value) {
        this.value = value;
    }
}
