package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChecksUpdateRequestBodyOutputImages {
    @JsonProperty("alt")
    public String alt;
    public ChecksUpdateRequestBodyOutputImages withAlt(String alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public ChecksUpdateRequestBodyOutputImages withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonProperty("image_url")
    public String imageUrl;
    public ChecksUpdateRequestBodyOutputImages withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
}