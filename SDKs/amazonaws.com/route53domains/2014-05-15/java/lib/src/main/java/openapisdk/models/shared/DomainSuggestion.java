package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainSuggestion
 * Information about one suggested domain name.
**/
public class DomainSuggestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Availability")
    public String availability;
    public DomainSuggestion withAvailability(String availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public DomainSuggestion withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}