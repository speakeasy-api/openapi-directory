package openapisdk.models.shared;


public enum ParallelDataFormatEnum {
    TSV("TSV"),
    CSV("CSV"),
    TMX("TMX");

    public final String value;

    private ParallelDataFormatEnum(String value) {
        this.value = value;
    }
}
