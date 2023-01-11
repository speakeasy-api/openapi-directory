package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public DescribeRuleRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DescribeRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
}