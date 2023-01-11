package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDominantLanguageDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DominantLanguageDetectionJobProperties")
    public DominantLanguageDetectionJobProperties dominantLanguageDetectionJobProperties;
    public DescribeDominantLanguageDetectionJobResponse withDominantLanguageDetectionJobProperties(DominantLanguageDetectionJobProperties dominantLanguageDetectionJobProperties) {
        this.dominantLanguageDetectionJobProperties = dominantLanguageDetectionJobProperties;
        return this;
    }
}