package openapisdk.models.shared;


public enum DataFormatEnum {
    AVRO("AVRO"),
    JSON("JSON");

    public final String value;

    private DataFormatEnum(String value) {
        this.value = value;
    }
}
