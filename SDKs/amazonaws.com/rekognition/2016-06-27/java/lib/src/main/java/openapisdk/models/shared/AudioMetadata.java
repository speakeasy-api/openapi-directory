package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioMetadata
 * Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
public class AudioMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Codec")
    public String codec;
    public AudioMetadata withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationMillis")
    public Long durationMillis;
    public AudioMetadata withDurationMillis(Long durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfChannels")
    public Long numberOfChannels;
    public AudioMetadata withNumberOfChannels(Long numberOfChannels) {
        this.numberOfChannels = numberOfChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRate")
    public Long sampleRate;
    public AudioMetadata withSampleRate(Long sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
}