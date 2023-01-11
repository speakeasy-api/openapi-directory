package openapisdk.models.shared;


public enum FileTypeEnum {
    CSV("CSV"),
    JSON("JSON"),
    PARQUET("PARQUET");

    public final String value;

    private FileTypeEnum(String value) {
        this.value = value;
    }
}
