package openapisdk.models.operations;


public enum GetEpisodesSortEnum {
    CREATED_AT("created_at"),
    EARLIEST_RELEASED_AT("earliest_released_at"),
    RELEASED_AT("released_at"),
    RELEASED_OR_CREATED_AT("released_or_created_at"),
    SORT_TITLE("sort_title"),
    TITLE("title"),
    UPDATED_AT("updated_at");

    public final String value;

    private GetEpisodesSortEnum(String value) {
        this.value = value;
    }
}
