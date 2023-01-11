package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CampaignEventFilter
 * Specifies the settings for events that cause a campaign to be sent.
**/
public class CampaignEventFilter {
    @JsonProperty("Dimensions")
    public EventDimensions dimensions;
    public CampaignEventFilter withDimensions(EventDimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("FilterType")
    public FilterTypeEnum filterType;
    public CampaignEventFilter withFilterType(FilterTypeEnum filterType) {
        this.filterType = filterType;
        return this;
    }
}