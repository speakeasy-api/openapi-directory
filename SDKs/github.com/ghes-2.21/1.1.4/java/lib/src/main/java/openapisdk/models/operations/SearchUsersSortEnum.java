package openapisdk.models.operations;


public enum SearchUsersSortEnum {
    FOLLOWERS("followers"),
    REPOSITORIES("repositories"),
    JOINED("joined");

    public final String value;

    private SearchUsersSortEnum(String value) {
        this.value = value;
    }
}
