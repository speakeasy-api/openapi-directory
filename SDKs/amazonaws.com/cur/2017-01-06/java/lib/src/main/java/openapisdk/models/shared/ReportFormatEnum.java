package openapisdk.models.shared;


public enum ReportFormatEnum {
    TEXT_O_RCSV("textORcsv"),
    PARQUET("Parquet");

    public final String value;

    private ReportFormatEnum(String value) {
        this.value = value;
    }
}
