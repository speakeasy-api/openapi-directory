package openapisdk.models.operations;


public enum GetUrlsAreaEnum {
    CURRENT("current"),
    DISAPPEARED("disappeared"),
    NEW_("new"),
    SEARCH_ENGINES_ORPHANS("search_engines_orphans");

    public final String value;

    private GetUrlsAreaEnum(String value) {
        this.value = value;
    }
}
