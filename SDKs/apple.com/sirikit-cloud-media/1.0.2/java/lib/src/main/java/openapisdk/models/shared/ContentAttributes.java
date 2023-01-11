package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContentAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albumName")
    public String albumName;
    public ContentAttributes withAlbumName(String albumName) {
        this.albumName = albumName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistName")
    public String artistName;
    public ContentAttributes withArtistName(String artistName) {
        this.artistName = artistName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork")
    public ContentAttributesArtwork artwork;
    public ContentAttributes withArtwork(ContentAttributesArtwork artwork) {
        this.artwork = artwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composerName")
    public String composerName;
    public ContentAttributes withComposerName(String composerName) {
        this.composerName = composerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInMillis")
    public Long durationInMillis;
    public ContentAttributes withDurationInMillis(Long durationInMillis) {
        this.durationInMillis = durationInMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genreNames")
    public String[] genreNames;
    public ContentAttributes withGenreNames(String[] genreNames) {
        this.genreNames = genreNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContentAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackNumber")
    public Long trackNumber;
    public ContentAttributes withTrackNumber(Long trackNumber) {
        this.trackNumber = trackNumber;
        return this;
    }
}