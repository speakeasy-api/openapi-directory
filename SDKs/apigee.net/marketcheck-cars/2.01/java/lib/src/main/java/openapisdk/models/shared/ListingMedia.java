package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListingMedia withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_links")
    public String[] photoLinks;
    public ListingMedia withPhotoLinks(String[] photoLinks) {
        this.photoLinks = photoLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_url")
    public String photoUrl;
    public ListingMedia withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
}