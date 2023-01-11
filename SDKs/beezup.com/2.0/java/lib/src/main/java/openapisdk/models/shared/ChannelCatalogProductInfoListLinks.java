package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogProductInfoListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("export")
    public LinksExportChannelCatalogProductInfoListLink export;
    public ChannelCatalogProductInfoListLinks withExport(LinksExportChannelCatalogProductInfoListLink export) {
        this.export = export;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogProductInfoListLink self;
    public ChannelCatalogProductInfoListLinks withSelf(LinksGetChannelCatalogProductInfoListLink self) {
        this.self = self;
        return this;
    }
}