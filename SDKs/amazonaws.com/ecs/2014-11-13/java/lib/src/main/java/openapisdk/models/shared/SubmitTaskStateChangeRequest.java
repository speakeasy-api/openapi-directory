package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SubmitTaskStateChangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public AttachmentStateChange[] attachments;
    public SubmitTaskStateChangeRequest withAttachments(AttachmentStateChange[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public SubmitTaskStateChangeRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public ContainerStateChange[] containers;
    public SubmitTaskStateChangeRequest withContainers(ContainerStateChange[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executionStoppedAt")
    public OffsetDateTime executionStoppedAt;
    public SubmitTaskStateChangeRequest withExecutionStoppedAt(OffsetDateTime executionStoppedAt) {
        this.executionStoppedAt = executionStoppedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedAgents")
    public ManagedAgentStateChange[] managedAgents;
    public SubmitTaskStateChangeRequest withManagedAgents(ManagedAgentStateChange[] managedAgents) {
        this.managedAgents = managedAgents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pullStartedAt")
    public OffsetDateTime pullStartedAt;
    public SubmitTaskStateChangeRequest withPullStartedAt(OffsetDateTime pullStartedAt) {
        this.pullStartedAt = pullStartedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pullStoppedAt")
    public OffsetDateTime pullStoppedAt;
    public SubmitTaskStateChangeRequest withPullStoppedAt(OffsetDateTime pullStoppedAt) {
        this.pullStoppedAt = pullStoppedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public SubmitTaskStateChangeRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SubmitTaskStateChangeRequest withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public String task;
    public SubmitTaskStateChangeRequest withTask(String task) {
        this.task = task;
        return this;
    }
}