package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderIndex {
    @JsonProperty("links")
    public OrderIndexLinks links;
    public OrderIndex withLinks(OrderIndexLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("lovLinks")
    public OrderIndexLovLinks lovLinks;
    public OrderIndex withLovLinks(OrderIndexLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
}