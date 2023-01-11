package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("component_name")
    public String componentName;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ended_at")
    public OffsetDateTime endedAt;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withEndedAt(OffsetDateTime endedAt) {
        this.endedAt = endedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_base")
    public String messageBase;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withMessageBase(String messageBase) {
        this.messageBase = messageBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason reason;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withReason(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum status;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withStatus(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public java.util.Map<String, Object>[] steps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle withSteps(java.util.Map<String, Object>[] steps) {
        this.steps = steps;
        return this;
    }
}