package openapisdk.models.shared;


public enum CompressionFormatStrategyEnum {
    NONE("None"),
    ZIP("Zip"),
    TAR_GZ("TarGz"),
    GZIP("Gzip"),
    BZIP2("Bzip2"),
    RAR("Rar");

    public final String value;

    private CompressionFormatStrategyEnum(String value) {
        this.value = value;
    }
}
