package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiResponseSimilarityResponseSimilarityList
 * Song similarity item.
**/
public class ApiResponseSimilarityResponseSimilarityList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist_name")
    public String artistName;
    public ApiResponseSimilarityResponseSimilarityList withArtistName(String artistName) {
        this.artistName = artistName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist_url")
    public String artistUrl;
    public ApiResponseSimilarityResponseSimilarityList withArtistUrl(String artistUrl) {
        this.artistUrl = artistUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ApiResponseSimilarityResponseSimilarityList withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index_id")
    public Long indexId;
    public ApiResponseSimilarityResponseSimilarityList withIndexId(Long indexId) {
        this.indexId = indexId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyrics")
    public String lyrics;
    public ApiResponseSimilarityResponseSimilarityList withLyrics(String lyrics) {
        this.lyrics = lyrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Float percentage;
    public ApiResponseSimilarityResponseSimilarityList withPercentage(Float percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song_name")
    public String songName;
    public ApiResponseSimilarityResponseSimilarityList withSongName(String songName) {
        this.songName = songName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("song_url")
    public String songUrl;
    public ApiResponseSimilarityResponseSimilarityList withSongUrl(String songUrl) {
        this.songUrl = songUrl;
        return this;
    }
}