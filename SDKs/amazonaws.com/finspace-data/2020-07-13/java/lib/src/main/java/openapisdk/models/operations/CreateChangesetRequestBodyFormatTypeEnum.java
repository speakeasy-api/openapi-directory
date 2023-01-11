package openapisdk.models.operations;


public enum CreateChangesetRequestBodyFormatTypeEnum {
    CSV("CSV"),
    JSON("JSON"),
    PARQUET("PARQUET"),
    XML("XML");

    public final String value;

    private CreateChangesetRequestBodyFormatTypeEnum(String value) {
        this.value = value;
    }
}
