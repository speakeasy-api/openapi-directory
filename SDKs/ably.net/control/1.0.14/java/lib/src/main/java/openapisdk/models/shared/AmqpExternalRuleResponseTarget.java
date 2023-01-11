package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpExternalRuleResponseTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpExternalRuleResponseTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpExternalRuleResponseTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpExternalRuleResponseTargetHeaders[] headers;
    public AmqpExternalRuleResponseTarget withHeaders(AmqpExternalRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("mandatoryRoute")
    public Boolean mandatoryRoute;
    public AmqpExternalRuleResponseTarget withMandatoryRoute(Boolean mandatoryRoute) {
        this.mandatoryRoute = mandatoryRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageTtl")
    public Long messageTtl;
    public AmqpExternalRuleResponseTarget withMessageTtl(Long messageTtl) {
        this.messageTtl = messageTtl;
        return this;
    }
    @JsonProperty("persistentMessages")
    public Boolean persistentMessages;
    public AmqpExternalRuleResponseTarget withPersistentMessages(Boolean persistentMessages) {
        this.persistentMessages = persistentMessages;
        return this;
    }
    @JsonProperty("routingKey")
    public String routingKey;
    public AmqpExternalRuleResponseTarget withRoutingKey(String routingKey) {
        this.routingKey = routingKey;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AmqpExternalRuleResponseTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}