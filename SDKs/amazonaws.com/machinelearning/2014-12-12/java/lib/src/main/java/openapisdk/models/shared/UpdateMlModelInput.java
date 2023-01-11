package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMlModelInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public UpdateMlModelInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelName")
    public String mlModelName;
    public UpdateMlModelInput withMlModelName(String mlModelName) {
        this.mlModelName = mlModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScoreThreshold")
    public Float scoreThreshold;
    public UpdateMlModelInput withScoreThreshold(Float scoreThreshold) {
        this.scoreThreshold = scoreThreshold;
        return this;
    }
}