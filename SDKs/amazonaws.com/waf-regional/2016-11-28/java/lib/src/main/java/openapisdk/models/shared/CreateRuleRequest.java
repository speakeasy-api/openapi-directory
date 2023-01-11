package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRuleRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRuleRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CreateRuleRequest withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateRuleRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}