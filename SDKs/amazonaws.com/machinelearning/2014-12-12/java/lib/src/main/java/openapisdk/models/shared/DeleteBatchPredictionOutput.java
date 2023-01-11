package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteBatchPredictionOutput
 * <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>
**/
public class DeleteBatchPredictionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchPredictionId")
    public String batchPredictionId;
    public DeleteBatchPredictionOutput withBatchPredictionId(String batchPredictionId) {
        this.batchPredictionId = batchPredictionId;
        return this;
    }
}