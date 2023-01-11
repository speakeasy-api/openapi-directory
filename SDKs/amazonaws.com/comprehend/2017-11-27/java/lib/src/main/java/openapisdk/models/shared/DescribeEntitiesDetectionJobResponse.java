package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEntitiesDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitiesDetectionJobProperties")
    public EntitiesDetectionJobProperties entitiesDetectionJobProperties;
    public DescribeEntitiesDetectionJobResponse withEntitiesDetectionJobProperties(EntitiesDetectionJobProperties entitiesDetectionJobProperties) {
        this.entitiesDetectionJobProperties = entitiesDetectionJobProperties;
        return this;
    }
}