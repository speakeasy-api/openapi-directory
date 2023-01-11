package openapisdk.models.shared;


public enum CompressionFormatEnum {
    ZIP("ZIP"),
    GZIP("GZIP"),
    PARQUET("Parquet");

    public final String value;

    private CompressionFormatEnum(String value) {
        this.value = value;
    }
}
