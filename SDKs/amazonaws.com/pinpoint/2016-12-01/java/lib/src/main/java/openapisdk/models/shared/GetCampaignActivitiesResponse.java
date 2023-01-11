package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignActivitiesResponse {
    @JsonProperty("ActivitiesResponse")
    public ActivitiesResponse activitiesResponse;
    public GetCampaignActivitiesResponse withActivitiesResponse(ActivitiesResponse activitiesResponse) {
        this.activitiesResponse = activitiesResponse;
        return this;
    }
}