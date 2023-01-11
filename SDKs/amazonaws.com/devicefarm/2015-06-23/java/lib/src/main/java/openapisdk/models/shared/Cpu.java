package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cpu
 * Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
**/
public class Cpu {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public String architecture;
    public Cpu withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clock")
    public Double clock;
    public Cpu withClock(Double clock) {
        this.clock = clock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public Cpu withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
}