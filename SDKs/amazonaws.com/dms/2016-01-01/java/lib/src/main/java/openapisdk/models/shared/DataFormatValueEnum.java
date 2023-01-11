package openapisdk.models.shared;


public enum DataFormatValueEnum {
    CSV("csv"),
    PARQUET("parquet");

    public final String value;

    private DataFormatValueEnum(String value) {
        this.value = value;
    }
}
