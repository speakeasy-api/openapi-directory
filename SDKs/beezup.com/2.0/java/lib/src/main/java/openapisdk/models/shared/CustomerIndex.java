package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomerIndex
 * The index of the customer API
**/
public class CustomerIndex {
    @JsonProperty("links")
    public CustomerIndexLinks links;
    public CustomerIndex withLinks(CustomerIndexLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("lovLinks")
    public CustomerIndexLovLinks lovLinks;
    public CustomerIndex withLovLinks(CustomerIndexLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
}