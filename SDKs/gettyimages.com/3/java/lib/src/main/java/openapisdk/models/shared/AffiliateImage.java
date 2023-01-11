package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AffiliateImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public AffiliateImage withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_url")
    public String destinationUrl;
    public AffiliateImage withDestinationUrl(String destinationUrl) {
        this.destinationUrl = destinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AffiliateImage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_urls")
    public AffiliateImageUrls previewUrls;
    public AffiliateImage withPreviewUrls(AffiliateImageUrls previewUrls) {
        this.previewUrls = previewUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AffiliateImage withTitle(String title) {
        this.title = title;
        return this;
    }
}