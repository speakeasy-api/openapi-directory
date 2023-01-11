package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmitJobRequestBodyRetryStrategy
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
public class SubmitJobRequestBodyRetryStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public Long attempts;
    public SubmitJobRequestBodyRetryStrategy withAttempts(Long attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluateOnExit")
    public openapisdk.models.shared.EvaluateOnExit[] evaluateOnExit;
    public SubmitJobRequestBodyRetryStrategy withEvaluateOnExit(openapisdk.models.shared.EvaluateOnExit[] evaluateOnExit) {
        this.evaluateOnExit = evaluateOnExit;
        return this;
    }
}