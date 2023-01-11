package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioParameters
 * Parameters required for transcoding audio.
**/
public class AudioParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AudioPackingMode")
    public String audioPackingMode;
    public AudioParameters withAudioPackingMode(String audioPackingMode) {
        this.audioPackingMode = audioPackingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitRate")
    public String bitRate;
    public AudioParameters withBitRate(String bitRate) {
        this.bitRate = bitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Channels")
    public String channels;
    public AudioParameters withChannels(String channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Codec")
    public String codec;
    public AudioParameters withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodecOptions")
    public AudioCodecOptions codecOptions;
    public AudioParameters withCodecOptions(AudioCodecOptions codecOptions) {
        this.codecOptions = codecOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRate")
    public String sampleRate;
    public AudioParameters withSampleRate(String sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
}