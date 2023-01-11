package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainConfigurationSummary
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul>
**/
public class DomainConfigurationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationArn")
    public String domainConfigurationArn;
    public DomainConfigurationSummary withDomainConfigurationArn(String domainConfigurationArn) {
        this.domainConfigurationArn = domainConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainConfigurationName")
    public String domainConfigurationName;
    public DomainConfigurationSummary withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceType")
    public ServiceTypeEnum serviceType;
    public DomainConfigurationSummary withServiceType(ServiceTypeEnum serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}