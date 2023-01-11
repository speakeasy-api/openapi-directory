package openapisdk.models.shared;


public enum CsvFileCompressionEnum {
    NONE("NONE"),
    GZIP("GZIP");

    public final String value;

    private CsvFileCompressionEnum(String value) {
        this.value = value;
    }
}
