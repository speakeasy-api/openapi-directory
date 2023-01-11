package openapisdk.models.shared;


public enum FormatTypeEnum {
    CSV("CSV"),
    JSON("JSON"),
    PARQUET("PARQUET"),
    XML("XML");

    public final String value;

    private FormatTypeEnum(String value) {
        this.value = value;
    }
}
