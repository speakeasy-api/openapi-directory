package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebAclRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateWebAclRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("DefaultAction")
    public WafAction defaultAction;
    public CreateWebAclRequest withDefaultAction(WafAction defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CreateWebAclRequest withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateWebAclRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateWebAclRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}