package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpectrumConfig
 * Object that describes a spectral <code>Config</code>.
**/
public class SpectrumConfig {
    @JsonProperty("bandwidth")
    public FrequencyBandwidth bandwidth;
    public SpectrumConfig withBandwidth(FrequencyBandwidth bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonProperty("centerFrequency")
    public Frequency centerFrequency;
    public SpectrumConfig withCenterFrequency(Frequency centerFrequency) {
        this.centerFrequency = centerFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polarization")
    public PolarizationEnum polarization;
    public SpectrumConfig withPolarization(PolarizationEnum polarization) {
        this.polarization = polarization;
        return this;
    }
}