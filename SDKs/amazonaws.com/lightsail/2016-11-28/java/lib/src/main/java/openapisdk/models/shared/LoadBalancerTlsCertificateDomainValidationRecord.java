package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerTlsCertificateDomainValidationRecord
 * Describes the validation record of each domain name in the SSL/TLS certificate.
**/
public class LoadBalancerTlsCertificateDomainValidationRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public LoadBalancerTlsCertificateDomainValidationRecord withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LoadBalancerTlsCertificateDomainValidationRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LoadBalancerTlsCertificateDomainValidationRecord withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationStatus")
    public LoadBalancerTlsCertificateDomainStatusEnum validationStatus;
    public LoadBalancerTlsCertificateDomainValidationRecord withValidationStatus(LoadBalancerTlsCertificateDomainStatusEnum validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LoadBalancerTlsCertificateDomainValidationRecord withValue(String value) {
        this.value = value;
        return this;
    }
}