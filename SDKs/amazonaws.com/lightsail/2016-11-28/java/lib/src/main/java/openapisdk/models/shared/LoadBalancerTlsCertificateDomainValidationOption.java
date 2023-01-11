package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerTlsCertificateDomainValidationOption
 * Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
**/
public class LoadBalancerTlsCertificateDomainValidationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public LoadBalancerTlsCertificateDomainValidationOption withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationStatus")
    public LoadBalancerTlsCertificateDomainStatusEnum validationStatus;
    public LoadBalancerTlsCertificateDomainValidationOption withValidationStatus(LoadBalancerTlsCertificateDomainStatusEnum validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
}