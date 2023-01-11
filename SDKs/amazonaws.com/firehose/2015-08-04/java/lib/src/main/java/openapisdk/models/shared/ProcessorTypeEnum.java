package openapisdk.models.shared;


public enum ProcessorTypeEnum {
    RECORD_DE_AGGREGATION("RecordDeAggregation"),
    LAMBDA("Lambda"),
    METADATA_EXTRACTION("MetadataExtraction"),
    APPEND_DELIMITER_TO_RECORD("AppendDelimiterToRecord");

    public final String value;

    private ProcessorTypeEnum(String value) {
        this.value = value;
    }
}
