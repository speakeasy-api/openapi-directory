package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEventSourceMappingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchSize")
    public Long batchSize;
    public UpdateEventSourceMappingRequestBody withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BisectBatchOnFunctionError")
    public Boolean bisectBatchOnFunctionError;
    public UpdateEventSourceMappingRequestBody withBisectBatchOnFunctionError(Boolean bisectBatchOnFunctionError) {
        this.bisectBatchOnFunctionError = bisectBatchOnFunctionError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationConfig")
    public UpdateEventSourceMappingRequestBodyDestinationConfig destinationConfig;
    public UpdateEventSourceMappingRequestBody withDestinationConfig(UpdateEventSourceMappingRequestBodyDestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateEventSourceMappingRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionName")
    public String functionName;
    public UpdateEventSourceMappingRequestBody withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionResponseTypes")
    public openapisdk.models.shared.FunctionResponseTypeEnum[] functionResponseTypes;
    public UpdateEventSourceMappingRequestBody withFunctionResponseTypes(openapisdk.models.shared.FunctionResponseTypeEnum[] functionResponseTypes) {
        this.functionResponseTypes = functionResponseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumBatchingWindowInSeconds")
    public Long maximumBatchingWindowInSeconds;
    public UpdateEventSourceMappingRequestBody withMaximumBatchingWindowInSeconds(Long maximumBatchingWindowInSeconds) {
        this.maximumBatchingWindowInSeconds = maximumBatchingWindowInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRecordAgeInSeconds")
    public Long maximumRecordAgeInSeconds;
    public UpdateEventSourceMappingRequestBody withMaximumRecordAgeInSeconds(Long maximumRecordAgeInSeconds) {
        this.maximumRecordAgeInSeconds = maximumRecordAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public UpdateEventSourceMappingRequestBody withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelizationFactor")
    public Long parallelizationFactor;
    public UpdateEventSourceMappingRequestBody withParallelizationFactor(Long parallelizationFactor) {
        this.parallelizationFactor = parallelizationFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccessConfigurations")
    public openapisdk.models.shared.SourceAccessConfiguration[] sourceAccessConfigurations;
    public UpdateEventSourceMappingRequestBody withSourceAccessConfigurations(openapisdk.models.shared.SourceAccessConfiguration[] sourceAccessConfigurations) {
        this.sourceAccessConfigurations = sourceAccessConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TumblingWindowInSeconds")
    public Long tumblingWindowInSeconds;
    public UpdateEventSourceMappingRequestBody withTumblingWindowInSeconds(Long tumblingWindowInSeconds) {
        this.tumblingWindowInSeconds = tumblingWindowInSeconds;
        return this;
    }
}