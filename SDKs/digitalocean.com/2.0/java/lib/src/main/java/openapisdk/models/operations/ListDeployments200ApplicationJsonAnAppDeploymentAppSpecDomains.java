package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains {
    @JsonProperty("domain")
    public String domain;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum type;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains withType(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wildcard")
    public Boolean wildcard;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains withWildcard(Boolean wildcard) {
        this.wildcard = wildcard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains withZone(String zone) {
        this.zone = zone;
        return this;
    }
}