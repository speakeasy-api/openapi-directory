package openapisdk.models.shared;


public enum TaggableResourceTypeEnum {
    BATCH_PREDICTION("BatchPrediction"),
    DATA_SOURCE("DataSource"),
    EVALUATION("Evaluation"),
    ML_MODEL("MLModel");

    public final String value;

    private TaggableResourceTypeEnum(String value) {
        this.value = value;
    }
}
