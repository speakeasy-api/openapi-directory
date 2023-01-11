package openapisdk.models.shared;


public enum BatchPredictionFilterVariableEnum {
    CREATED_AT("CreatedAt"),
    LAST_UPDATED_AT("LastUpdatedAt"),
    STATUS("Status"),
    NAME("Name"),
    IAM_USER("IAMUser"),
    ML_MODEL_ID("MLModelId"),
    DATA_SOURCE_ID("DataSourceId"),
    DATA_URI("DataURI");

    public final String value;

    private BatchPredictionFilterVariableEnum(String value) {
        this.value = value;
    }
}
