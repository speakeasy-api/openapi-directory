package openapisdk.models.operations;


public enum CollectionsListOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    CITES("cites");

    public final String value;

    private CollectionsListOrderEnum(String value) {
        this.value = value;
    }
}
