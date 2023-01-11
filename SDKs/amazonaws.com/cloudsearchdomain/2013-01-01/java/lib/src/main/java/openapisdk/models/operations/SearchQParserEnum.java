package openapisdk.models.operations;


public enum SearchQParserEnum {
    SIMPLE("simple"),
    STRUCTURED("structured"),
    LUCENE("lucene"),
    DISMAX("dismax");

    public final String value;

    private SearchQParserEnum(String value) {
        this.value = value;
    }
}
