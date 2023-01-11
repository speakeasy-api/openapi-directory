package openapisdk.models.operations;


public enum PrivateCollectionsListOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    CITES("cites");

    public final String value;

    private PrivateCollectionsListOrderEnum(String value) {
        this.value = value;
    }
}
