package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobWatermark
 * Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
**/
public class JobWatermark {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encryption")
    public Encryption encryption;
    public JobWatermark withEncryption(Encryption encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputKey")
    public String inputKey;
    public JobWatermark withInputKey(String inputKey) {
        this.inputKey = inputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PresetWatermarkId")
    public String presetWatermarkId;
    public JobWatermark withPresetWatermarkId(String presetWatermarkId) {
        this.presetWatermarkId = presetWatermarkId;
        return this;
    }
}