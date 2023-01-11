package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpExternalRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AmqpExternalRulePatchTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AmqpExternalRulePatchTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AmqpExternalRulePatchTargetHeaders[] headers;
    public AmqpExternalRulePatchTarget withHeaders(AmqpExternalRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryRoute")
    public Boolean mandatoryRoute;
    public AmqpExternalRulePatchTarget withMandatoryRoute(Boolean mandatoryRoute) {
        this.mandatoryRoute = mandatoryRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageTtl")
    public Long messageTtl;
    public AmqpExternalRulePatchTarget withMessageTtl(Long messageTtl) {
        this.messageTtl = messageTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistentMessages")
    public Boolean persistentMessages;
    public AmqpExternalRulePatchTarget withPersistentMessages(Boolean persistentMessages) {
        this.persistentMessages = persistentMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingKey")
    public String routingKey;
    public AmqpExternalRulePatchTarget withRoutingKey(String routingKey) {
        this.routingKey = routingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AmqpExternalRulePatchTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}