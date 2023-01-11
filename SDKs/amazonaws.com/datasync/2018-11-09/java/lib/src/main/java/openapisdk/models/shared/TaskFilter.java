package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TaskFilter
 * You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
**/
public class TaskFilter {
    @JsonProperty("Name")
    public TaskFilterNameEnum name;
    public TaskFilter withName(TaskFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Operator")
    public OperatorEnum operator;
    public TaskFilter withOperator(OperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public TaskFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}