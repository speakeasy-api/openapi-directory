package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobOutput
 * The <code>CreateJobOutput</code> structure.
**/
public class CreateJobOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlbumArt")
    public JobAlbumArt albumArt;
    public CreateJobOutput withAlbumArt(JobAlbumArt albumArt) {
        this.albumArt = albumArt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Captions")
    public Captions captions;
    public CreateJobOutput withCaptions(Captions captions) {
        this.captions = captions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Composition")
    public java.util.Map<String, Object> composition;
    public CreateJobOutput withComposition(java.util.Map<String, Object> composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encryption")
    public Encryption encryption;
    public CreateJobOutput withEncryption(Encryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public CreateJobOutput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PresetId")
    public String presetId;
    public CreateJobOutput withPresetId(String presetId) {
        this.presetId = presetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rotate")
    public String rotate;
    public CreateJobOutput withRotate(String rotate) {
        this.rotate = rotate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentDuration")
    public String segmentDuration;
    public CreateJobOutput withSegmentDuration(String segmentDuration) {
        this.segmentDuration = segmentDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailEncryption")
    public Encryption thumbnailEncryption;
    public CreateJobOutput withThumbnailEncryption(Encryption thumbnailEncryption) {
        this.thumbnailEncryption = thumbnailEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailPattern")
    public String thumbnailPattern;
    public CreateJobOutput withThumbnailPattern(String thumbnailPattern) {
        this.thumbnailPattern = thumbnailPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Watermarks")
    public JobWatermark[] watermarks;
    public CreateJobOutput withWatermarks(JobWatermark[] watermarks) {
        this.watermarks = watermarks;
        return this;
    }
}