package openapisdk.models.shared;


public enum ParquetVersionValueEnum {
    PARQUET10("parquet-1-0"),
    PARQUET20("parquet-2-0");

    public final String value;

    private ParquetVersionValueEnum(String value) {
        this.value = value;
    }
}
