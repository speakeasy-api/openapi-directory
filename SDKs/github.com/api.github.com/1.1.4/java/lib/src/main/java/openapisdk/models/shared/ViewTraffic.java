package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ViewTraffic
 * View Traffic
**/
public class ViewTraffic {
    @JsonProperty("count")
    public Long count;
    public ViewTraffic withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("uniques")
    public Long uniques;
    public ViewTraffic withUniques(Long uniques) {
        this.uniques = uniques;
        return this;
    }
    @JsonProperty("views")
    public Traffic[] views;
    public ViewTraffic withViews(Traffic[] views) {
        this.views = views;
        return this;
    }
}