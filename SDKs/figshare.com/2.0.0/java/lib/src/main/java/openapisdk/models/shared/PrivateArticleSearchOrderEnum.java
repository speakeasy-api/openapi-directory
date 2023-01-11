package openapisdk.models.shared;


public enum PrivateArticleSearchOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    DOWNLOADS("downloads"),
    CITES("cites");

    public final String value;

    private PrivateArticleSearchOrderEnum(String value) {
        this.value = value;
    }
}
