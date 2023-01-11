package openapisdk.models.shared;


public enum JsonFileCompressionEnum {
    NONE("NONE"),
    GZIP("GZIP");

    public final String value;

    private JsonFileCompressionEnum(String value) {
        this.value = value;
    }
}
