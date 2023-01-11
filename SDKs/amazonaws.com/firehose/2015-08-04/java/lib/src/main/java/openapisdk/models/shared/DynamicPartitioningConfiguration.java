package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicPartitioningConfiguration
 * The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a> 
**/
public class DynamicPartitioningConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public DynamicPartitioningConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryOptions")
    public RetryOptions retryOptions;
    public DynamicPartitioningConfiguration withRetryOptions(RetryOptions retryOptions) {
        this.retryOptions = retryOptions;
        return this;
    }
}