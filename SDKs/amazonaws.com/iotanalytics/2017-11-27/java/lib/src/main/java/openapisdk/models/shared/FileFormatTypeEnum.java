package openapisdk.models.shared;


public enum FileFormatTypeEnum {
    JSON("JSON"),
    PARQUET("PARQUET");

    public final String value;

    private FileFormatTypeEnum(String value) {
        this.value = value;
    }
}
