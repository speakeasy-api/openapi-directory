package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AntennaDownlinkConfig
 * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
**/
public class AntennaDownlinkConfig {
    @JsonProperty("spectrumConfig")
    public SpectrumConfig spectrumConfig;
    public AntennaDownlinkConfig withSpectrumConfig(SpectrumConfig spectrumConfig) {
        this.spectrumConfig = spectrumConfig;
        return this;
    }
}