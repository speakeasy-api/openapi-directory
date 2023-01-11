package openapisdk.models.operations;


public enum PutReportDefinitionRequestBodyFormatEnum {
    CSV("CSV"),
    PARQUET("PARQUET");

    public final String value;

    private PutReportDefinitionRequestBodyFormatEnum(String value) {
        this.value = value;
    }
}
