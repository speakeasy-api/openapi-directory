package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HpoConfig
 * Describes the properties for hyperparameter optimization (HPO).
**/
public class HpoConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithmHyperParameterRanges")
    public HyperParameterRanges algorithmHyperParameterRanges;
    public HpoConfig withAlgorithmHyperParameterRanges(HyperParameterRanges algorithmHyperParameterRanges) {
        this.algorithmHyperParameterRanges = algorithmHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hpoObjective")
    public HpoObjective hpoObjective;
    public HpoConfig withHpoObjective(HpoObjective hpoObjective) {
        this.hpoObjective = hpoObjective;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hpoResourceConfig")
    public HpoResourceConfig hpoResourceConfig;
    public HpoConfig withHpoResourceConfig(HpoResourceConfig hpoResourceConfig) {
        this.hpoResourceConfig = hpoResourceConfig;
        return this;
    }
}