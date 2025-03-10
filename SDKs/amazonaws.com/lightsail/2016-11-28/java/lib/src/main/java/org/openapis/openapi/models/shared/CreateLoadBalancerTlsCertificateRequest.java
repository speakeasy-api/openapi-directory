/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateLoadBalancerTlsCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAlternativeNames")
    public String[] certificateAlternativeNames;

    public CreateLoadBalancerTlsCertificateRequest withCertificateAlternativeNames(String[] certificateAlternativeNames) {
        this.certificateAlternativeNames = certificateAlternativeNames;
        return this;
    }
    
    @JsonProperty("certificateDomainName")
    public String certificateDomainName;

    public CreateLoadBalancerTlsCertificateRequest withCertificateDomainName(String certificateDomainName) {
        this.certificateDomainName = certificateDomainName;
        return this;
    }
    
    @JsonProperty("certificateName")
    public String certificateName;

    public CreateLoadBalancerTlsCertificateRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;

    public CreateLoadBalancerTlsCertificateRequest withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;

    public CreateLoadBalancerTlsCertificateRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    public CreateLoadBalancerTlsCertificateRequest(@JsonProperty("certificateDomainName") String certificateDomainName, @JsonProperty("certificateName") String certificateName, @JsonProperty("loadBalancerName") String loadBalancerName) {
        this.certificateDomainName = certificateDomainName;
        this.certificateName = certificateName;
        this.loadBalancerName = loadBalancerName;
  }
}
