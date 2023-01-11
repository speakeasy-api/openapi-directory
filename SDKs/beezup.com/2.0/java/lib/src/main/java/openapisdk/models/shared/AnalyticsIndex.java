package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyticsIndex
 * The Analytics API operation index.
**/
public class AnalyticsIndex {
    @JsonProperty("links")
    public AnalyticsIndexLinks links;
    public AnalyticsIndex withLinks(AnalyticsIndexLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lovLinks")
    public AnalyticsIndexLovLinks lovLinks;
    public AnalyticsIndex withLovLinks(AnalyticsIndexLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
    @JsonProperty("stores")
    public AnalyticsStoreIndex[] stores;
    public AnalyticsIndex withStores(AnalyticsStoreIndex[] stores) {
        this.stores = stores;
        return this;
    }
}