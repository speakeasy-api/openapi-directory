package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ads
 * This type defines the container for an array of ads.
**/
public class Ads {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ads")
    public Ad[] ads;
    public Ads withAds(Ad[] ads) {
        this.ads = ads;
        return this;
    }
}