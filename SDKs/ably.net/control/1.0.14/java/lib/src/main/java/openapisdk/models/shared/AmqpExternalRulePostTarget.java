package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpExternalRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpExternalRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpExternalRulePostTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpExternalRulePostTargetHeaders[] headers;
    public AmqpExternalRulePostTarget withHeaders(AmqpExternalRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("mandatoryRoute")
    public Boolean mandatoryRoute;
    public AmqpExternalRulePostTarget withMandatoryRoute(Boolean mandatoryRoute) {
        this.mandatoryRoute = mandatoryRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageTtl")
    public Long messageTtl;
    public AmqpExternalRulePostTarget withMessageTtl(Long messageTtl) {
        this.messageTtl = messageTtl;
        return this;
    }
    @JsonProperty("persistentMessages")
    public Boolean persistentMessages;
    public AmqpExternalRulePostTarget withPersistentMessages(Boolean persistentMessages) {
        this.persistentMessages = persistentMessages;
        return this;
    }
    @JsonProperty("routingKey")
    public String routingKey;
    public AmqpExternalRulePostTarget withRoutingKey(String routingKey) {
        this.routingKey = routingKey;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AmqpExternalRulePostTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}