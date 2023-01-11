package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LegacyTrackingChannelCatalogListLinks
 * Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
 * 
**/
public class LegacyTrackingChannelCatalogListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetLegacyTrackingChannelCatalogsLink self;
    public LegacyTrackingChannelCatalogListLinks withSelf(LinksGetLegacyTrackingChannelCatalogsLink self) {
        this.self = self;
        return this;
    }
}