package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchParameters
 * The custom parameters to be used when the target is an Batch job.
**/
public class BatchParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArrayProperties")
    public BatchArrayProperties arrayProperties;
    public BatchParameters withArrayProperties(BatchArrayProperties arrayProperties) {
        this.arrayProperties = arrayProperties;
        return this;
    }
    @JsonProperty("JobDefinition")
    public String jobDefinition;
    public BatchParameters withJobDefinition(String jobDefinition) {
        this.jobDefinition = jobDefinition;
        return this;
    }
    @JsonProperty("JobName")
    public String jobName;
    public BatchParameters withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryStrategy")
    public BatchRetryStrategy retryStrategy;
    public BatchParameters withRetryStrategy(BatchRetryStrategy retryStrategy) {
        this.retryStrategy = retryStrategy;
        return this;
    }
}