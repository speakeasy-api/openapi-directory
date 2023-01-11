package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppsResponse {
    @JsonProperty("ApplicationsResponse")
    public ApplicationsResponse applicationsResponse;
    public GetAppsResponse withApplicationsResponse(ApplicationsResponse applicationsResponse) {
        this.applicationsResponse = applicationsResponse;
        return this;
    }
}