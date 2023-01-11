package openapisdk.models.shared;


public enum ParquetCompressionEnum {
    UNCOMPRESSED("UNCOMPRESSED"),
    GZIP("GZIP"),
    SNAPPY("SNAPPY");

    public final String value;

    private ParquetCompressionEnum(String value) {
        this.value = value;
    }
}
