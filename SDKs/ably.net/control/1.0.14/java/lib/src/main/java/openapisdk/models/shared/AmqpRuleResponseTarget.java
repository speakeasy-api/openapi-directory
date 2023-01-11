package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpRuleResponseTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpRuleResponseTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpRuleResponseTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpRuleResponseTargetHeaders[] headers;
    public AmqpRuleResponseTarget withHeaders(AmqpRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("queueId")
    public String queueId;
    public AmqpRuleResponseTarget withQueueId(String queueId) {
        this.queueId = queueId;
        return this;
    }
}