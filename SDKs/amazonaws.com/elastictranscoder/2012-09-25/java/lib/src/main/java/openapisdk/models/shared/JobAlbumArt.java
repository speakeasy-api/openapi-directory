package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobAlbumArt
 * The .jpg or .png file associated with an audio file.
**/
public class JobAlbumArt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Artwork")
    public Artwork[] artwork;
    public JobAlbumArt withArtwork(Artwork[] artwork) {
        this.artwork = artwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MergePolicy")
    public String mergePolicy;
    public JobAlbumArt withMergePolicy(String mergePolicy) {
        this.mergePolicy = mergePolicy;
        return this;
    }
}