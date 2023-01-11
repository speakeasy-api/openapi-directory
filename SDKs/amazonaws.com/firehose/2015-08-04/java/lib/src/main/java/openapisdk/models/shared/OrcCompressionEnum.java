package openapisdk.models.shared;


public enum OrcCompressionEnum {
    NONE("NONE"),
    ZLIB("ZLIB"),
    SNAPPY("SNAPPY");

    public final String value;

    private OrcCompressionEnum(String value) {
        this.value = value;
    }
}
