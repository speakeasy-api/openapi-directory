package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPiiEntitiesDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPiiEntitiesDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PiiEntitiesDetectionJobPropertiesList")
    public PiiEntitiesDetectionJobProperties[] piiEntitiesDetectionJobPropertiesList;
    public ListPiiEntitiesDetectionJobsResponse withPiiEntitiesDetectionJobPropertiesList(PiiEntitiesDetectionJobProperties[] piiEntitiesDetectionJobPropertiesList) {
        this.piiEntitiesDetectionJobPropertiesList = piiEntitiesDetectionJobPropertiesList;
        return this;
    }
}