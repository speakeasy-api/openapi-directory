package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBatchPredictionOutput
 * <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>
**/
public class CreateBatchPredictionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchPredictionId")
    public String batchPredictionId;
    public CreateBatchPredictionOutput withBatchPredictionId(String batchPredictionId) {
        this.batchPredictionId = batchPredictionId;
        return this;
    }
}