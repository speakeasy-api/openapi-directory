package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFloatingIp200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floating_ip")
    public openapisdk.models.shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems floatingIp;
    public GetFloatingIp200ApplicationJson withFloatingIp(openapisdk.models.shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
}