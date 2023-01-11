package openapisdk.models.shared;


public enum DatasetStatusEnum {
    CREATED("CREATED"),
    INGESTION_IN_PROGRESS("INGESTION_IN_PROGRESS"),
    ACTIVE("ACTIVE");

    public final String value;

    private DatasetStatusEnum(String value) {
        this.value = value;
    }
}
