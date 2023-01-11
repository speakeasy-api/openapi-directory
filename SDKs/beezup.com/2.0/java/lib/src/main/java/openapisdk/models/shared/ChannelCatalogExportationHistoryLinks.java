package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogExportationHistoryLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetChannelCatalogExportationHistoryLink self;
    public ChannelCatalogExportationHistoryLinks withSelf(LinksGetChannelCatalogExportationHistoryLink self) {
        this.self = self;
        return this;
    }
}