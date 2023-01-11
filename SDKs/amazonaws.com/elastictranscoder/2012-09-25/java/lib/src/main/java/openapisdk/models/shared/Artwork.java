package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Artwork
 * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
**/
public class Artwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlbumArtFormat")
    public String albumArtFormat;
    public Artwork withAlbumArtFormat(String albumArtFormat) {
        this.albumArtFormat = albumArtFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encryption")
    public Encryption encryption;
    public Artwork withEncryption(Encryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputKey")
    public String inputKey;
    public Artwork withInputKey(String inputKey) {
        this.inputKey = inputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxHeight")
    public String maxHeight;
    public Artwork withMaxHeight(String maxHeight) {
        this.maxHeight = maxHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWidth")
    public String maxWidth;
    public Artwork withMaxWidth(String maxWidth) {
        this.maxWidth = maxWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaddingPolicy")
    public String paddingPolicy;
    public Artwork withPaddingPolicy(String paddingPolicy) {
        this.paddingPolicy = paddingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizingPolicy")
    public String sizingPolicy;
    public Artwork withSizingPolicy(String sizingPolicy) {
        this.sizingPolicy = sizingPolicy;
        return this;
    }
}