package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderExportations
 * The list of Order report exportations.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
public class OrderExportations {
    @JsonProperty("exportations")
    public OrderExportationReporting[] exportations;
    public OrderExportations withExportations(OrderExportationReporting[] exportations) {
        this.exportations = exportations;
        return this;
    }
    @JsonProperty("links")
    public OrderExportationsLinks links;
    public OrderExportations withLinks(OrderExportationsLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public OrderExportations withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}