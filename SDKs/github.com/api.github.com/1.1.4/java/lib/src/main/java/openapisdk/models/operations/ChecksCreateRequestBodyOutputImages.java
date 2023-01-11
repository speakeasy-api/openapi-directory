package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChecksCreateRequestBodyOutputImages {
    @JsonProperty("alt")
    public String alt;
    public ChecksCreateRequestBodyOutputImages withAlt(String alt) {
        this.alt = alt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public ChecksCreateRequestBodyOutputImages withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonProperty("image_url")
    public String imageUrl;
    public ChecksCreateRequestBodyOutputImages withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
}