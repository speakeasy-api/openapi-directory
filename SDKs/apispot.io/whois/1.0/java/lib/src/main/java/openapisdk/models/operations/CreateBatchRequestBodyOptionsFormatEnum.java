package openapisdk.models.operations;


public enum CreateBatchRequestBodyOptionsFormatEnum {
    RAW("raw"),
    FORMATTED("formatted"),
    JSON("json");

    public final String value;

    private CreateBatchRequestBodyOptionsFormatEnum(String value) {
        this.value = value;
    }
}
