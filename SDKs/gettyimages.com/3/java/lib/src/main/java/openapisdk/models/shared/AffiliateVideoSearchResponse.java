package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateVideoSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_corrections")
    public AutoCorrections autoCorrections;
    public AffiliateVideoSearchResponse withAutoCorrections(AutoCorrections autoCorrections) {
        this.autoCorrections = autoCorrections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public AffiliateVideo[] videos;
    public AffiliateVideoSearchResponse withVideos(AffiliateVideo[] videos) {
        this.videos = videos;
        return this;
    }
}