package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFloatingIp202ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floating_ip")
    public openapisdk.models.shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems floatingIp;
    public CreateFloatingIp202ApplicationJson withFloatingIp(openapisdk.models.shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CreateFloatingIp202ApplicationJsonLinks links;
    public CreateFloatingIp202ApplicationJson withLinks(CreateFloatingIp202ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
}