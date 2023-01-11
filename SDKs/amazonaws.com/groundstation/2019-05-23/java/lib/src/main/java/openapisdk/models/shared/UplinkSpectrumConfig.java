package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UplinkSpectrumConfig
 * Information about the uplink spectral <code>Config</code>.
**/
public class UplinkSpectrumConfig {
    @JsonProperty("centerFrequency")
    public Frequency centerFrequency;
    public UplinkSpectrumConfig withCenterFrequency(Frequency centerFrequency) {
        this.centerFrequency = centerFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polarization")
    public PolarizationEnum polarization;
    public UplinkSpectrumConfig withPolarization(PolarizationEnum polarization) {
        this.polarization = polarization;
        return this;
    }
}