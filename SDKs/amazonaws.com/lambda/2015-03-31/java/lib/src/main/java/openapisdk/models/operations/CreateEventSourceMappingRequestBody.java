package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateEventSourceMappingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchSize")
    public Long batchSize;
    public CreateEventSourceMappingRequestBody withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BisectBatchOnFunctionError")
    public Boolean bisectBatchOnFunctionError;
    public CreateEventSourceMappingRequestBody withBisectBatchOnFunctionError(Boolean bisectBatchOnFunctionError) {
        this.bisectBatchOnFunctionError = bisectBatchOnFunctionError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationConfig")
    public CreateEventSourceMappingRequestBodyDestinationConfig destinationConfig;
    public CreateEventSourceMappingRequestBody withDestinationConfig(CreateEventSourceMappingRequestBodyDestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CreateEventSourceMappingRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public CreateEventSourceMappingRequestBody withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public CreateEventSourceMappingRequestBody withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionResponseTypes")
    public openapisdk.models.shared.FunctionResponseTypeEnum[] functionResponseTypes;
    public CreateEventSourceMappingRequestBody withFunctionResponseTypes(openapisdk.models.shared.FunctionResponseTypeEnum[] functionResponseTypes) {
        this.functionResponseTypes = functionResponseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumBatchingWindowInSeconds")
    public Long maximumBatchingWindowInSeconds;
    public CreateEventSourceMappingRequestBody withMaximumBatchingWindowInSeconds(Long maximumBatchingWindowInSeconds) {
        this.maximumBatchingWindowInSeconds = maximumBatchingWindowInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRecordAgeInSeconds")
    public Long maximumRecordAgeInSeconds;
    public CreateEventSourceMappingRequestBody withMaximumRecordAgeInSeconds(Long maximumRecordAgeInSeconds) {
        this.maximumRecordAgeInSeconds = maximumRecordAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public CreateEventSourceMappingRequestBody withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelizationFactor")
    public Long parallelizationFactor;
    public CreateEventSourceMappingRequestBody withParallelizationFactor(Long parallelizationFactor) {
        this.parallelizationFactor = parallelizationFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Queues")
    public String[] queues;
    public CreateEventSourceMappingRequestBody withQueues(String[] queues) {
        this.queues = queues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelfManagedEventSource")
    public CreateEventSourceMappingRequestBodySelfManagedEventSource selfManagedEventSource;
    public CreateEventSourceMappingRequestBody withSelfManagedEventSource(CreateEventSourceMappingRequestBodySelfManagedEventSource selfManagedEventSource) {
        this.selfManagedEventSource = selfManagedEventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccessConfigurations")
    public openapisdk.models.shared.SourceAccessConfiguration[] sourceAccessConfigurations;
    public CreateEventSourceMappingRequestBody withSourceAccessConfigurations(openapisdk.models.shared.SourceAccessConfiguration[] sourceAccessConfigurations) {
        this.sourceAccessConfigurations = sourceAccessConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingPosition")
    public CreateEventSourceMappingRequestBodyStartingPositionEnum startingPosition;
    public CreateEventSourceMappingRequestBody withStartingPosition(CreateEventSourceMappingRequestBodyStartingPositionEnum startingPosition) {
        this.startingPosition = startingPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartingPositionTimestamp")
    public OffsetDateTime startingPositionTimestamp;
    public CreateEventSourceMappingRequestBody withStartingPositionTimestamp(OffsetDateTime startingPositionTimestamp) {
        this.startingPositionTimestamp = startingPositionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Topics")
    public String[] topics;
    public CreateEventSourceMappingRequestBody withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TumblingWindowInSeconds")
    public Long tumblingWindowInSeconds;
    public CreateEventSourceMappingRequestBody withTumblingWindowInSeconds(Long tumblingWindowInSeconds) {
        this.tumblingWindowInSeconds = tumblingWindowInSeconds;
        return this;
    }
}