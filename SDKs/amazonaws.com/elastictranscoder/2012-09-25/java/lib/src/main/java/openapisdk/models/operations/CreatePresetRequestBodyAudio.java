package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePresetRequestBodyAudio
 * Parameters required for transcoding audio.
**/
public class CreatePresetRequestBodyAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AudioPackingMode")
    public String audioPackingMode;
    public CreatePresetRequestBodyAudio withAudioPackingMode(String audioPackingMode) {
        this.audioPackingMode = audioPackingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitRate")
    public String bitRate;
    public CreatePresetRequestBodyAudio withBitRate(String bitRate) {
        this.bitRate = bitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Channels")
    public String channels;
    public CreatePresetRequestBodyAudio withChannels(String channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Codec")
    public String codec;
    public CreatePresetRequestBodyAudio withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodecOptions")
    public openapisdk.models.shared.AudioCodecOptions codecOptions;
    public CreatePresetRequestBodyAudio withCodecOptions(openapisdk.models.shared.AudioCodecOptions codecOptions) {
        this.codecOptions = codecOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRate")
    public String sampleRate;
    public CreatePresetRequestBodyAudio withSampleRate(String sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
}