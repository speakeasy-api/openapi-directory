package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateVideoUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_motion")
    public String largeMotion;
    public AffiliateVideoUrls withLargeMotion(String largeMotion) {
        this.largeMotion = largeMotion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_still")
    public String largeStill;
    public AffiliateVideoUrls withLargeStill(String largeStill) {
        this.largeStill = largeStill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium_still")
    public String mediumStill;
    public AffiliateVideoUrls withMediumStill(String mediumStill) {
        this.mediumStill = mediumStill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_motion")
    public String smallMotion;
    public AffiliateVideoUrls withSmallMotion(String smallMotion) {
        this.smallMotion = smallMotion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_still")
    public String smallStill;
    public AffiliateVideoUrls withSmallStill(String smallStill) {
        this.smallStill = smallStill;
        return this;
    }
}