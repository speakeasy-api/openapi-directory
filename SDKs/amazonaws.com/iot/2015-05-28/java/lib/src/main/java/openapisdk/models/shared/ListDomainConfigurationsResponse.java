package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDomainConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurations")
    public DomainConfigurationSummary[] domainConfigurations;
    public ListDomainConfigurationsResponse withDomainConfigurations(DomainConfigurationSummary[] domainConfigurations) {
        this.domainConfigurations = domainConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListDomainConfigurationsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}