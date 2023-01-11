package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainDetails
 * Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
**/
public class DomainDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public DomainDetails withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}