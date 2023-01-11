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
 * Workflow
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
**/
public class Workflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintDetails")
    public BlueprintDetails blueprintDetails;
    public Workflow withBlueprintDetails(BlueprintDetails blueprintDetails) {
        this.blueprintDetails = blueprintDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedOn")
    public OffsetDateTime createdOn;
    public Workflow withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRunProperties")
    public java.util.Map<String, String> defaultRunProperties;
    public Workflow withDefaultRunProperties(java.util.Map<String, String> defaultRunProperties) {
        this.defaultRunProperties = defaultRunProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Workflow withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Graph")
    public WorkflowGraph graph;
    public Workflow withGraph(WorkflowGraph graph) {
        this.graph = graph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public Workflow withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastRun")
    public WorkflowRun lastRun;
    public Workflow withLastRun(WorkflowRun lastRun) {
        this.lastRun = lastRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrentRuns")
    public Long maxConcurrentRuns;
    public Workflow withMaxConcurrentRuns(Long maxConcurrentRuns) {
        this.maxConcurrentRuns = maxConcurrentRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Workflow withName(String name) {
        this.name = name;
        return this;
    }
}