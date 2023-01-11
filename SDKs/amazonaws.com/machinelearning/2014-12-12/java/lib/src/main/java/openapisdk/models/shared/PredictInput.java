package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PredictInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public PredictInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonProperty("PredictEndpoint")
    public String predictEndpoint;
    public PredictInput withPredictEndpoint(String predictEndpoint) {
        this.predictEndpoint = predictEndpoint;
        return this;
    }
    @JsonProperty("Record")
    public java.util.Map<String, String> record;
    public PredictInput withRecord(java.util.Map<String, String> record) {
        this.record = record;
        return this;
    }
}