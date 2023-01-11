package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeKeyPhrasesDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPhrasesDetectionJobProperties")
    public KeyPhrasesDetectionJobProperties keyPhrasesDetectionJobProperties;
    public DescribeKeyPhrasesDetectionJobResponse withKeyPhrasesDetectionJobProperties(KeyPhrasesDetectionJobProperties keyPhrasesDetectionJobProperties) {
        this.keyPhrasesDetectionJobProperties = keyPhrasesDetectionJobProperties;
        return this;
    }
}