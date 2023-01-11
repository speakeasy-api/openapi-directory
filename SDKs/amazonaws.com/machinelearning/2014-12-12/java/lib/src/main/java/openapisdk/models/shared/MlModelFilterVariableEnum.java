package openapisdk.models.shared;


public enum MlModelFilterVariableEnum {
    CREATED_AT("CreatedAt"),
    LAST_UPDATED_AT("LastUpdatedAt"),
    STATUS("Status"),
    NAME("Name"),
    IAM_USER("IAMUser"),
    TRAINING_DATA_SOURCE_ID("TrainingDataSourceId"),
    REALTIME_ENDPOINT_STATUS("RealtimeEndpointStatus"),
    ML_MODEL_TYPE("MLModelType"),
    ALGORITHM("Algorithm"),
    TRAINING_DATA_URI("TrainingDataURI");

    public final String value;

    private MlModelFilterVariableEnum(String value) {
        this.value = value;
    }
}
