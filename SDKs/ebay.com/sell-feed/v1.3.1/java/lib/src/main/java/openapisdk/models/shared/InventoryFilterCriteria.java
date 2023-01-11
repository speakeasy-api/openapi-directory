package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventoryFilterCriteria
 * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
**/
public class InventoryFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDateRange")
    public DateRange creationDateRange;
    public InventoryFilterCriteria withCreationDateRange(DateRange creationDateRange) {
        this.creationDateRange = creationDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingFormat")
    public String listingFormat;
    public InventoryFilterCriteria withListingFormat(String listingFormat) {
        this.listingFormat = listingFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingStatus")
    public String listingStatus;
    public InventoryFilterCriteria withListingStatus(String listingStatus) {
        this.listingStatus = listingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedDateRange")
    public DateRange modifiedDateRange;
    public InventoryFilterCriteria withModifiedDateRange(DateRange modifiedDateRange) {
        this.modifiedDateRange = modifiedDateRange;
        return this;
    }
}