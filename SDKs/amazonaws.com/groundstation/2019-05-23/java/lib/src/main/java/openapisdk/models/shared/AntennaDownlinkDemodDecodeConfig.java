package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AntennaDownlinkDemodDecodeConfig
 * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
**/
public class AntennaDownlinkDemodDecodeConfig {
    @JsonProperty("decodeConfig")
    public DecodeConfig decodeConfig;
    public AntennaDownlinkDemodDecodeConfig withDecodeConfig(DecodeConfig decodeConfig) {
        this.decodeConfig = decodeConfig;
        return this;
    }
    @JsonProperty("demodulationConfig")
    public DemodulationConfig demodulationConfig;
    public AntennaDownlinkDemodDecodeConfig withDemodulationConfig(DemodulationConfig demodulationConfig) {
        this.demodulationConfig = demodulationConfig;
        return this;
    }
    @JsonProperty("spectrumConfig")
    public SpectrumConfig spectrumConfig;
    public AntennaDownlinkDemodDecodeConfig withSpectrumConfig(SpectrumConfig spectrumConfig) {
        this.spectrumConfig = spectrumConfig;
        return this;
    }
}