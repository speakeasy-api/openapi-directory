package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Triplet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public String device;
    public Triplet withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mib")
    public String mib;
    public Triplet withMib(String mib) {
        this.mib = mib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenario")
    public Integer scenario;
    public Triplet withScenario(Integer scenario) {
        this.scenario = scenario;
        return this;
    }
}