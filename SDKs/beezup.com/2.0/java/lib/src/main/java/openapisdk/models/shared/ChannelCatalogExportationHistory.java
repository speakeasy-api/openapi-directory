package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogExportationHistory {
    @JsonProperty("exportations")
    public ChannelCatalogExportationReporting[] exportations;
    public ChannelCatalogExportationHistory withExportations(ChannelCatalogExportationReporting[] exportations) {
        this.exportations = exportations;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogExportationHistoryLinks links;
    public ChannelCatalogExportationHistory withLinks(ChannelCatalogExportationHistoryLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ChannelCatalogExportationHistory withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}