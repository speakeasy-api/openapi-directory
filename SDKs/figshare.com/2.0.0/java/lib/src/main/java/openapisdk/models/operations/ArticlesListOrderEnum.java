package openapisdk.models.operations;


public enum ArticlesListOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    DOWNLOADS("downloads"),
    CITES("cites");

    public final String value;

    private ArticlesListOrderEnum(String value) {
        this.value = value;
    }
}
