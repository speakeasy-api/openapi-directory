package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingNestMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_links")
    public String[] photoLinks;
    public ListingNestMedia withPhotoLinks(String[] photoLinks) {
        this.photoLinks = photoLinks;
        return this;
    }
}