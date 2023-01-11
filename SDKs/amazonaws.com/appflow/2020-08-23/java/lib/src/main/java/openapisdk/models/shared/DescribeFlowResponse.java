package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DescribeFlowResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public DescribeFlowResponse withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeFlowResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationFlowConfigList")
    public DestinationFlowConfig[] destinationFlowConfigList;
    public DescribeFlowResponse withDestinationFlowConfigList(DestinationFlowConfig[] destinationFlowConfigList) {
        this.destinationFlowConfigList = destinationFlowConfigList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowArn")
    public String flowArn;
    public DescribeFlowResponse withFlowArn(String flowArn) {
        this.flowArn = flowArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowName")
    public String flowName;
    public DescribeFlowResponse withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowStatus")
    public FlowStatusEnum flowStatus;
    public DescribeFlowResponse withFlowStatus(FlowStatusEnum flowStatus) {
        this.flowStatus = flowStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowStatusMessage")
    public String flowStatusMessage;
    public DescribeFlowResponse withFlowStatusMessage(String flowStatusMessage) {
        this.flowStatusMessage = flowStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsArn")
    public String kmsArn;
    public DescribeFlowResponse withKmsArn(String kmsArn) {
        this.kmsArn = kmsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRunExecutionDetails")
    public ExecutionDetails lastRunExecutionDetails;
    public DescribeFlowResponse withLastRunExecutionDetails(ExecutionDetails lastRunExecutionDetails) {
        this.lastRunExecutionDetails = lastRunExecutionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public DescribeFlowResponse withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedBy")
    public String lastUpdatedBy;
    public DescribeFlowResponse withLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFlowConfig")
    public SourceFlowConfig sourceFlowConfig;
    public DescribeFlowResponse withSourceFlowConfig(SourceFlowConfig sourceFlowConfig) {
        this.sourceFlowConfig = sourceFlowConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeFlowResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public Task[] tasks;
    public DescribeFlowResponse withTasks(Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerConfig")
    public TriggerConfig triggerConfig;
    public DescribeFlowResponse withTriggerConfig(TriggerConfig triggerConfig) {
        this.triggerConfig = triggerConfig;
        return this;
    }
}