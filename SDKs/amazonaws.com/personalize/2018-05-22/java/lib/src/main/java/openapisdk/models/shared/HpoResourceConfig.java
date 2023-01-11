package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HpoResourceConfig
 * Describes the resource configuration for hyperparameter optimization (HPO).
**/
public class HpoResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNumberOfTrainingJobs")
    public String maxNumberOfTrainingJobs;
    public HpoResourceConfig withMaxNumberOfTrainingJobs(String maxNumberOfTrainingJobs) {
        this.maxNumberOfTrainingJobs = maxNumberOfTrainingJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxParallelTrainingJobs")
    public String maxParallelTrainingJobs;
    public HpoResourceConfig withMaxParallelTrainingJobs(String maxParallelTrainingJobs) {
        this.maxParallelTrainingJobs = maxParallelTrainingJobs;
        return this;
    }
}