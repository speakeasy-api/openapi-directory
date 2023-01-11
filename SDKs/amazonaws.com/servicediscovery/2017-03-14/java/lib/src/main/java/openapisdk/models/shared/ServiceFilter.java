package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceFilter
 * A complex type that lets you specify the namespaces that you want to list services for.
**/
public class ServiceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Condition")
    public FilterConditionEnum condition;
    public ServiceFilter withCondition(FilterConditionEnum condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("Name")
    public ServiceFilterNameEnum name;
    public ServiceFilter withName(ServiceFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public ServiceFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}