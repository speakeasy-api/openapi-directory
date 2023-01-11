package openapisdk.models.shared;


public enum SourceDataFunctionEnum {
    COPY("Copy"),
    TRIM_TITLE("TrimTitle"),
    MAP("Map");

    public final String value;

    private SourceDataFunctionEnum(String value) {
        this.value = value;
    }
}
