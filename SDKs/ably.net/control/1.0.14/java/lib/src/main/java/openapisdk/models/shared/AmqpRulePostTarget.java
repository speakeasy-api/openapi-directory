package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpRulePostTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpRulePostTargetHeaders[] headers;
    public AmqpRulePostTarget withHeaders(AmqpRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("queueId")
    public String queueId;
    public AmqpRulePostTarget withQueueId(String queueId) {
        this.queueId = queueId;
        return this;
    }
}