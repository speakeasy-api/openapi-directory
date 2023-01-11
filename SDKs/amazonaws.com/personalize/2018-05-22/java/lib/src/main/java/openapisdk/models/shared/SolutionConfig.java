package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SolutionConfig
 * Describes the configuration properties for the solution.
**/
public class SolutionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithmHyperParameters")
    public java.util.Map<String, String> algorithmHyperParameters;
    public SolutionConfig withAlgorithmHyperParameters(java.util.Map<String, String> algorithmHyperParameters) {
        this.algorithmHyperParameters = algorithmHyperParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoMLConfig")
    public AutoMlConfig autoMLConfig;
    public SolutionConfig withAutoMlConfig(AutoMlConfig autoMLConfig) {
        this.autoMLConfig = autoMLConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventValueThreshold")
    public String eventValueThreshold;
    public SolutionConfig withEventValueThreshold(String eventValueThreshold) {
        this.eventValueThreshold = eventValueThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureTransformationParameters")
    public java.util.Map<String, String> featureTransformationParameters;
    public SolutionConfig withFeatureTransformationParameters(java.util.Map<String, String> featureTransformationParameters) {
        this.featureTransformationParameters = featureTransformationParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hpoConfig")
    public HpoConfig hpoConfig;
    public SolutionConfig withHpoConfig(HpoConfig hpoConfig) {
        this.hpoConfig = hpoConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimizationObjective")
    public OptimizationObjective optimizationObjective;
    public SolutionConfig withOptimizationObjective(OptimizationObjective optimizationObjective) {
        this.optimizationObjective = optimizationObjective;
        return this;
    }
}