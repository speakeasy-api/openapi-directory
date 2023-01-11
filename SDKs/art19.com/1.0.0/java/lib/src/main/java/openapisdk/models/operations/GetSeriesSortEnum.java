package openapisdk.models.operations;


public enum GetSeriesSortEnum {
    CREATED_AT("created_at"),
    EPISODE_RELEASED_AT("episode_released_at"),
    SORT_TITLE("sort_title"),
    TITLE("title"),
    UPDATED_AT("updated_at");

    public final String value;

    private GetSeriesSortEnum(String value) {
        this.value = value;
    }
}
