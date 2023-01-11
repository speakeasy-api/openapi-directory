package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StyleEntity
 * Show Style
**/
public class StyleEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public StyleEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public ImageEntity logo;
    public StyleEntity withLogo(ImageEntity logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public StyleEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public ImageEntity thumbnail;
    public StyleEntity withThumbnail(ImageEntity thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}