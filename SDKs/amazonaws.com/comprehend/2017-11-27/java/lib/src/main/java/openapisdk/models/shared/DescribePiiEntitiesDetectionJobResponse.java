package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePiiEntitiesDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PiiEntitiesDetectionJobProperties")
    public PiiEntitiesDetectionJobProperties piiEntitiesDetectionJobProperties;
    public DescribePiiEntitiesDetectionJobResponse withPiiEntitiesDetectionJobProperties(PiiEntitiesDetectionJobProperties piiEntitiesDetectionJobProperties) {
        this.piiEntitiesDetectionJobProperties = piiEntitiesDetectionJobProperties;
        return this;
    }
}