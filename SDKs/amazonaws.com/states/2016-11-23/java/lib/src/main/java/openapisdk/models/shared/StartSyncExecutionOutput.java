package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartSyncExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingDetails")
    public BillingDetails billingDetails;
    public StartSyncExecutionOutput withBillingDetails(BillingDetails billingDetails) {
        this.billingDetails = billingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public StartSyncExecutionOutput withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public StartSyncExecutionOutput withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("executionArn")
    public String executionArn;
    public StartSyncExecutionOutput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public StartSyncExecutionOutput withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputDetails")
    public CloudWatchEventsExecutionDataDetails inputDetails;
    public StartSyncExecutionOutput withInputDetails(CloudWatchEventsExecutionDataDetails inputDetails) {
        this.inputDetails = inputDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StartSyncExecutionOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public StartSyncExecutionOutput withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputDetails")
    public CloudWatchEventsExecutionDataDetails outputDetails;
    public StartSyncExecutionOutput withOutputDetails(CloudWatchEventsExecutionDataDetails outputDetails) {
        this.outputDetails = outputDetails;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public StartSyncExecutionOutput withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public StartSyncExecutionOutput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonProperty("status")
    public SyncExecutionStatusEnum status;
    public StartSyncExecutionOutput withStatus(SyncExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("stopDate")
    public OffsetDateTime stopDate;
    public StartSyncExecutionOutput withStopDate(OffsetDateTime stopDate) {
        this.stopDate = stopDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceHeader")
    public String traceHeader;
    public StartSyncExecutionOutput withTraceHeader(String traceHeader) {
        this.traceHeader = traceHeader;
        return this;
    }
}