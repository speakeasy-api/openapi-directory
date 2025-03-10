/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDomainRequest {
    @JsonProperty("DomainId")
    public String domainId;

    public DescribeDomainRequest withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    
    public DescribeDomainRequest(@JsonProperty("DomainId") String domainId) {
        this.domainId = domainId;
  }
}
