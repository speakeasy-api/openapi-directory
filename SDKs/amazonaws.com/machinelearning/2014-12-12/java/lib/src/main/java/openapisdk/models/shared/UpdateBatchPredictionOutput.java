package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBatchPredictionOutput
 * <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
**/
public class UpdateBatchPredictionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchPredictionId")
    public String batchPredictionId;
    public UpdateBatchPredictionOutput withBatchPredictionId(String batchPredictionId) {
        this.batchPredictionId = batchPredictionId;
        return this;
    }
}