package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTriggerRequest {
    @JsonProperty("Actions")
    public Action[] actions;
    public CreateTriggerRequest withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateTriggerRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBatchingCondition")
    public EventBatchingCondition eventBatchingCondition;
    public CreateTriggerRequest withEventBatchingCondition(EventBatchingCondition eventBatchingCondition) {
        this.eventBatchingCondition = eventBatchingCondition;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predicate")
    public Predicate predicate;
    public CreateTriggerRequest withPredicate(Predicate predicate) {
        this.predicate = predicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;
    public CreateTriggerRequest withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartOnCreation")
    public Boolean startOnCreation;
    public CreateTriggerRequest withStartOnCreation(Boolean startOnCreation) {
        this.startOnCreation = startOnCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateTriggerRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Type")
    public TriggerTypeEnum type;
    public CreateTriggerRequest withType(TriggerTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowName")
    public String workflowName;
    public CreateTriggerRequest withWorkflowName(String workflowName) {
        this.workflowName = workflowName;
        return this;
    }
}