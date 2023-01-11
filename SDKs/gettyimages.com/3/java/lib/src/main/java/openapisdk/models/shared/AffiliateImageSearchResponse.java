package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateImageSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_corrections")
    public AutoCorrections autoCorrections;
    public AffiliateImageSearchResponse withAutoCorrections(AutoCorrections autoCorrections) {
        this.autoCorrections = autoCorrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public AffiliateImage[] images;
    public AffiliateImageSearchResponse withImages(AffiliateImage[] images) {
        this.images = images;
        return this;
    }
}