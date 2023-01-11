package openapisdk.models.shared;


public enum FormatEnum {
    CSV("CSV"),
    PARQUET("PARQUET");

    public final String value;

    private FormatEnum(String value) {
        this.value = value;
    }
}
