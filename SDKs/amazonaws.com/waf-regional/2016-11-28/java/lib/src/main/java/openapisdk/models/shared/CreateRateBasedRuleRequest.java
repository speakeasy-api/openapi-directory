package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRateBasedRuleRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRateBasedRuleRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("MetricName")
    public String metricName;
    public CreateRateBasedRuleRequest withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateRateBasedRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RateKey")
    public RateKeyEnum rateKey;
    public CreateRateBasedRuleRequest withRateKey(RateKeyEnum rateKey) {
        this.rateKey = rateKey;
        return this;
    }
    @JsonProperty("RateLimit")
    public Long rateLimit;
    public CreateRateBasedRuleRequest withRateLimit(Long rateLimit) {
        this.rateLimit = rateLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateRateBasedRuleRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}