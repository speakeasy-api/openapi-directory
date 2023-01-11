package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerUpdate
 * A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
**/
public class TriggerUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public Action[] actions;
    public TriggerUpdate withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public TriggerUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBatchingCondition")
    public EventBatchingCondition eventBatchingCondition;
    public TriggerUpdate withEventBatchingCondition(EventBatchingCondition eventBatchingCondition) {
        this.eventBatchingCondition = eventBatchingCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TriggerUpdate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predicate")
    public Predicate predicate;
    public TriggerUpdate withPredicate(Predicate predicate) {
        this.predicate = predicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;
    public TriggerUpdate withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
}