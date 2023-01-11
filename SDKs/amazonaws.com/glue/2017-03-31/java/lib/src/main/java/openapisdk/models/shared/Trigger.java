package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trigger
 * Information about a specific trigger.
**/
public class Trigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public Action[] actions;
    public Trigger withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Trigger withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBatchingCondition")
    public EventBatchingCondition eventBatchingCondition;
    public Trigger withEventBatchingCondition(EventBatchingCondition eventBatchingCondition) {
        this.eventBatchingCondition = eventBatchingCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Trigger withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Trigger withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predicate")
    public Predicate predicate;
    public Trigger withPredicate(Predicate predicate) {
        this.predicate = predicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;
    public Trigger withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public TriggerStateEnum state;
    public Trigger withState(TriggerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TriggerTypeEnum type;
    public Trigger withType(TriggerTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowName")
    public String workflowName;
    public Trigger withWorkflowName(String workflowName) {
        this.workflowName = workflowName;
        return this;
    }
}