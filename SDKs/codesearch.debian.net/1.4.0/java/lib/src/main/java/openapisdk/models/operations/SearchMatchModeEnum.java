package openapisdk.models.operations;


public enum SearchMatchModeEnum {
    LITERAL("literal"),
    REGEXP("regexp");

    public final String value;

    private SearchMatchModeEnum(String value) {
        this.value = value;
    }
}
