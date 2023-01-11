package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateVideo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public AffiliateVideo withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clip_length")
    public String clipLength;
    public AffiliateVideo withClipLength(String clipLength) {
        this.clipLength = clipLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_url")
    public String destinationUrl;
    public AffiliateVideo withDestinationUrl(String destinationUrl) {
        this.destinationUrl = destinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AffiliateVideo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_urls")
    public AffiliateVideoUrls previewUrls;
    public AffiliateVideo withPreviewUrls(AffiliateVideoUrls previewUrls) {
        this.previewUrls = previewUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AffiliateVideo withTitle(String title) {
        this.title = title;
        return this;
    }
}