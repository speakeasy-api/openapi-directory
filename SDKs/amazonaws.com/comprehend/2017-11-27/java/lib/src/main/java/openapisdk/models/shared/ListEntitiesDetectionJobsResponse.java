package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntitiesDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitiesDetectionJobPropertiesList")
    public EntitiesDetectionJobProperties[] entitiesDetectionJobPropertiesList;
    public ListEntitiesDetectionJobsResponse withEntitiesDetectionJobPropertiesList(EntitiesDetectionJobProperties[] entitiesDetectionJobPropertiesList) {
        this.entitiesDetectionJobPropertiesList = entitiesDetectionJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntitiesDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}