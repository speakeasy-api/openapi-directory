package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTagsForDomainRequest
 * The ListTagsForDomainRequest includes the following elements.
**/
public class ListTagsForDomainRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public ListTagsForDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}