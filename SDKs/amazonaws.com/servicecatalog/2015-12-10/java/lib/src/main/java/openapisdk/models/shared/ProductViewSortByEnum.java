package openapisdk.models.shared;


public enum ProductViewSortByEnum {
    TITLE("Title"),
    VERSION_COUNT("VersionCount"),
    CREATION_DATE("CreationDate");

    public final String value;

    private ProductViewSortByEnum(String value) {
        this.value = value;
    }
}
