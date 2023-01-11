package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRuleGroupRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRuleGroupRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CreateRuleGroupRequest withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateRuleGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateRuleGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}