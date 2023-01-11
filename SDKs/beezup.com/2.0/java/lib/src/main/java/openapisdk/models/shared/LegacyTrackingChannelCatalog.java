package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LegacyTrackingChannelCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public LegacyTrackingChannelCatalogLinks links;
    public LegacyTrackingChannelCatalog withLinks(LegacyTrackingChannelCatalogLinks links) {
        this.links = links;
        return this;
    }
}