package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdReferences
 * This type is a container for a list of ad IDs and their associated URIs.
**/
public class AdReferences {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ads")
    public AdReference[] ads;
    public AdReferences withAds(AdReference[] ads) {
        this.ads = ads;
        return this;
    }
}