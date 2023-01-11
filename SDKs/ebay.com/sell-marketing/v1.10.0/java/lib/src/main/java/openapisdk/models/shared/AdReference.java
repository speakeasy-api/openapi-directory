package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdReference
 * This type defines the fields for an ad ID and its associated URL.
**/
public class AdReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public AdReference withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public AdReference withHref(String href) {
        this.href = href;
        return this;
    }
}