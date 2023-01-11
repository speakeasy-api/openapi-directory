package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * Contains information about a rule in Amazon EventBridge.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public Rule withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Rule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public Rule withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventPattern")
    public String eventPattern;
    public Rule withEventPattern(String eventPattern) {
        this.eventPattern = eventPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedBy")
    public String managedBy;
    public Rule withManagedBy(String managedBy) {
        this.managedBy = managedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Rule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public Rule withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduleExpression")
    public String scheduleExpression;
    public Rule withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public RuleStateEnum state;
    public Rule withState(RuleStateEnum state) {
        this.state = state;
        return this;
    }
}