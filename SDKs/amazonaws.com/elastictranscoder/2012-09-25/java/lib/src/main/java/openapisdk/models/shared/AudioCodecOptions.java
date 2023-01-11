package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioCodecOptions
 * Options associated with your audio codec.
**/
public class AudioCodecOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitDepth")
    public String bitDepth;
    public AudioCodecOptions withBitDepth(String bitDepth) {
        this.bitDepth = bitDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BitOrder")
    public String bitOrder;
    public AudioCodecOptions withBitOrder(String bitOrder) {
        this.bitOrder = bitOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Profile")
    public String profile;
    public AudioCodecOptions withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Signed")
    public String signed;
    public AudioCodecOptions withSigned(String signed) {
        this.signed = signed;
        return this;
    }
}