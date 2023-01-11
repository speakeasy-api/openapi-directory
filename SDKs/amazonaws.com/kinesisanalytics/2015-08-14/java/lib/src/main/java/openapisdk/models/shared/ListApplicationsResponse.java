package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListApplicationsResponse
 * <p/>
**/
public class ListApplicationsResponse {
    @JsonProperty("ApplicationSummaries")
    public ApplicationSummary[] applicationSummaries;
    public ListApplicationsResponse withApplicationSummaries(ApplicationSummary[] applicationSummaries) {
        this.applicationSummaries = applicationSummaries;
        return this;
    }
    @JsonProperty("HasMoreApplications")
    public Boolean hasMoreApplications;
    public ListApplicationsResponse withHasMoreApplications(Boolean hasMoreApplications) {
        this.hasMoreApplications = hasMoreApplications;
        return this;
    }
}