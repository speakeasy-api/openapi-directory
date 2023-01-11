package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AnalyticsStoreIndex {
    @JsonProperty("links")
    public AnalyticsStoreIndexLinks links;
    public AnalyticsStoreIndex withLinks(AnalyticsStoreIndexLinks links) {
        this.links = links;
        return this;
    }
}