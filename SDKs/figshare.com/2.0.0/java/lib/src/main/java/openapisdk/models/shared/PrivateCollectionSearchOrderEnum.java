package openapisdk.models.shared;


public enum PrivateCollectionSearchOrderEnum {
    PUBLISHED_DATE("published_date"),
    MODIFIED_DATE("modified_date"),
    VIEWS("views"),
    SHARES("shares"),
    CITES("cites");

    public final String value;

    private PrivateCollectionSearchOrderEnum(String value) {
        this.value = value;
    }
}
