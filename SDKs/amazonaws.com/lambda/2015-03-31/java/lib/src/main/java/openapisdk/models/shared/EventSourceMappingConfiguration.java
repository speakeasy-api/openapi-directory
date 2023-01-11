package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EventSourceMappingConfiguration
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
**/
public class EventSourceMappingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchSize")
    public Long batchSize;
    public EventSourceMappingConfiguration withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BisectBatchOnFunctionError")
    public Boolean bisectBatchOnFunctionError;
    public EventSourceMappingConfiguration withBisectBatchOnFunctionError(Boolean bisectBatchOnFunctionError) {
        this.bisectBatchOnFunctionError = bisectBatchOnFunctionError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationConfig")
    public DestinationConfig destinationConfig;
    public EventSourceMappingConfiguration withDestinationConfig(DestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public EventSourceMappingConfiguration withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionArn")
    public String functionArn;
    public EventSourceMappingConfiguration withFunctionArn(String functionArn) {
        this.functionArn = functionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionResponseTypes")
    public FunctionResponseTypeEnum[] functionResponseTypes;
    public EventSourceMappingConfiguration withFunctionResponseTypes(FunctionResponseTypeEnum[] functionResponseTypes) {
        this.functionResponseTypes = functionResponseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModified")
    public OffsetDateTime lastModified;
    public EventSourceMappingConfiguration withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastProcessingResult")
    public String lastProcessingResult;
    public EventSourceMappingConfiguration withLastProcessingResult(String lastProcessingResult) {
        this.lastProcessingResult = lastProcessingResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumBatchingWindowInSeconds")
    public Long maximumBatchingWindowInSeconds;
    public EventSourceMappingConfiguration withMaximumBatchingWindowInSeconds(Long maximumBatchingWindowInSeconds) {
        this.maximumBatchingWindowInSeconds = maximumBatchingWindowInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRecordAgeInSeconds")
    public Long maximumRecordAgeInSeconds;
    public EventSourceMappingConfiguration withMaximumRecordAgeInSeconds(Long maximumRecordAgeInSeconds) {
        this.maximumRecordAgeInSeconds = maximumRecordAgeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumRetryAttempts")
    public Long maximumRetryAttempts;
    public EventSourceMappingConfiguration withMaximumRetryAttempts(Long maximumRetryAttempts) {
        this.maximumRetryAttempts = maximumRetryAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelizationFactor")
    public Long parallelizationFactor;
    public EventSourceMappingConfiguration withParallelizationFactor(Long parallelizationFactor) {
        this.parallelizationFactor = parallelizationFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Queues")
    public String[] queues;
    public EventSourceMappingConfiguration withQueues(String[] queues) {
        this.queues = queues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelfManagedEventSource")
    public SelfManagedEventSource selfManagedEventSource;
    public EventSourceMappingConfiguration withSelfManagedEventSource(SelfManagedEventSource selfManagedEventSource) {
        this.selfManagedEventSource = selfManagedEventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceAccessConfigurations")
    public SourceAccessConfiguration[] sourceAccessConfigurations;
    public EventSourceMappingConfiguration withSourceAccessConfigurations(SourceAccessConfiguration[] sourceAccessConfigurations) {
        this.sourceAccessConfigurations = sourceAccessConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingPosition")
    public EventSourcePositionEnum startingPosition;
    public EventSourceMappingConfiguration withStartingPosition(EventSourcePositionEnum startingPosition) {
        this.startingPosition = startingPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartingPositionTimestamp")
    public OffsetDateTime startingPositionTimestamp;
    public EventSourceMappingConfiguration withStartingPositionTimestamp(OffsetDateTime startingPositionTimestamp) {
        this.startingPositionTimestamp = startingPositionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public EventSourceMappingConfiguration withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateTransitionReason")
    public String stateTransitionReason;
    public EventSourceMappingConfiguration withStateTransitionReason(String stateTransitionReason) {
        this.stateTransitionReason = stateTransitionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Topics")
    public String[] topics;
    public EventSourceMappingConfiguration withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TumblingWindowInSeconds")
    public Long tumblingWindowInSeconds;
    public EventSourceMappingConfiguration withTumblingWindowInSeconds(Long tumblingWindowInSeconds) {
        this.tumblingWindowInSeconds = tumblingWindowInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UUID")
    public String uuid;
    public EventSourceMappingConfiguration withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}