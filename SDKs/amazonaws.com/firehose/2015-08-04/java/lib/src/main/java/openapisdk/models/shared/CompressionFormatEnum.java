package openapisdk.models.shared;


public enum CompressionFormatEnum {
    UNCOMPRESSED("UNCOMPRESSED"),
    GZIP("GZIP"),
    ZIP("ZIP"),
    SNAPPY("Snappy"),
    HADOOP_SNAPPY("HADOOP_SNAPPY");

    public final String value;

    private CompressionFormatEnum(String value) {
        this.value = value;
    }
}
