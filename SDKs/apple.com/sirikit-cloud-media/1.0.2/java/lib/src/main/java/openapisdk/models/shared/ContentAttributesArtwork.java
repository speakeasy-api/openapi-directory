package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContentAttributesArtwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ContentAttributesArtwork withUrl(String url) {
        this.url = url;
        return this;
    }
}