package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput withName(String name) {
        this.name = name;
        return this;
    }
}