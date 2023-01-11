package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpRulePatchTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpRulePatchTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpRulePatchTargetHeaders[] headers;
    public AmqpRulePatchTarget withHeaders(AmqpRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queueId")
    public String queueId;
    public AmqpRulePatchTarget withQueueId(String queueId) {
        this.queueId = queueId;
        return this;
    }
}