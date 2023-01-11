package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateImageUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large")
    public String large;
    public AffiliateImageUrls withLarge(String large) {
        this.large = large;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_height")
    public Integer largeHeight;
    public AffiliateImageUrls withLargeHeight(Integer largeHeight) {
        this.largeHeight = largeHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_width")
    public Integer largeWidth;
    public AffiliateImageUrls withLargeWidth(Integer largeWidth) {
        this.largeWidth = largeWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public String medium;
    public AffiliateImageUrls withMedium(String medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium_height")
    public Integer mediumHeight;
    public AffiliateImageUrls withMediumHeight(Integer mediumHeight) {
        this.mediumHeight = mediumHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium_width")
    public Integer mediumWidth;
    public AffiliateImageUrls withMediumWidth(Integer mediumWidth) {
        this.mediumWidth = mediumWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small")
    public String small;
    public AffiliateImageUrls withSmall(String small) {
        this.small = small;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_height")
    public Integer smallHeight;
    public AffiliateImageUrls withSmallHeight(Integer smallHeight) {
        this.smallHeight = smallHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_width")
    public Integer smallWidth;
    public AffiliateImageUrls withSmallWidth(Integer smallWidth) {
        this.smallWidth = smallWidth;
        return this;
    }
}