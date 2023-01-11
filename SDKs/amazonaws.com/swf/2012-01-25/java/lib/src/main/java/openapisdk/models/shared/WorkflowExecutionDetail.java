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
 * WorkflowExecutionDetail
 * Contains details about a workflow execution.
**/
public class WorkflowExecutionDetail {
    @JsonProperty("executionConfiguration")
    public WorkflowExecutionConfiguration executionConfiguration;
    public WorkflowExecutionDetail withExecutionConfiguration(WorkflowExecutionConfiguration executionConfiguration) {
        this.executionConfiguration = executionConfiguration;
        return this;
    }
    @JsonProperty("executionInfo")
    public WorkflowExecutionInfo executionInfo;
    public WorkflowExecutionDetail withExecutionInfo(WorkflowExecutionInfo executionInfo) {
        this.executionInfo = executionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestActivityTaskTimestamp")
    public OffsetDateTime latestActivityTaskTimestamp;
    public WorkflowExecutionDetail withLatestActivityTaskTimestamp(OffsetDateTime latestActivityTaskTimestamp) {
        this.latestActivityTaskTimestamp = latestActivityTaskTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestExecutionContext")
    public String latestExecutionContext;
    public WorkflowExecutionDetail withLatestExecutionContext(String latestExecutionContext) {
        this.latestExecutionContext = latestExecutionContext;
        return this;
    }
    @JsonProperty("openCounts")
    public WorkflowExecutionOpenCounts openCounts;
    public WorkflowExecutionDetail withOpenCounts(WorkflowExecutionOpenCounts openCounts) {
        this.openCounts = openCounts;
        return this;
    }
}