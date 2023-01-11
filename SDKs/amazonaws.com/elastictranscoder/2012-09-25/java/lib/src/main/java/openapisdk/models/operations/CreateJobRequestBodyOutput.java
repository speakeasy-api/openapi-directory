package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobRequestBodyOutput
 * The <code>CreateJobOutput</code> structure.
**/
public class CreateJobRequestBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlbumArt")
    public openapisdk.models.shared.JobAlbumArt albumArt;
    public CreateJobRequestBodyOutput withAlbumArt(openapisdk.models.shared.JobAlbumArt albumArt) {
        this.albumArt = albumArt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Captions")
    public openapisdk.models.shared.Captions captions;
    public CreateJobRequestBodyOutput withCaptions(openapisdk.models.shared.Captions captions) {
        this.captions = captions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Composition")
    public java.util.Map<String, Object> composition;
    public CreateJobRequestBodyOutput withComposition(java.util.Map<String, Object> composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encryption")
    public openapisdk.models.shared.Encryption encryption;
    public CreateJobRequestBodyOutput withEncryption(openapisdk.models.shared.Encryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public CreateJobRequestBodyOutput withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PresetId")
    public String presetId;
    public CreateJobRequestBodyOutput withPresetId(String presetId) {
        this.presetId = presetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rotate")
    public String rotate;
    public CreateJobRequestBodyOutput withRotate(String rotate) {
        this.rotate = rotate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentDuration")
    public String segmentDuration;
    public CreateJobRequestBodyOutput withSegmentDuration(String segmentDuration) {
        this.segmentDuration = segmentDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailEncryption")
    public openapisdk.models.shared.Encryption thumbnailEncryption;
    public CreateJobRequestBodyOutput withThumbnailEncryption(openapisdk.models.shared.Encryption thumbnailEncryption) {
        this.thumbnailEncryption = thumbnailEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailPattern")
    public String thumbnailPattern;
    public CreateJobRequestBodyOutput withThumbnailPattern(String thumbnailPattern) {
        this.thumbnailPattern = thumbnailPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Watermarks")
    public openapisdk.models.shared.JobWatermark[] watermarks;
    public CreateJobRequestBodyOutput withWatermarks(openapisdk.models.shared.JobWatermark[] watermarks) {
        this.watermarks = watermarks;
        return this;
    }
}