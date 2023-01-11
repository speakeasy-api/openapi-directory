package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceActionsForProvisioningArtifactOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListServiceActionsForProvisioningArtifactOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionSummaries")
    public ServiceActionSummary[] serviceActionSummaries;
    public ListServiceActionsForProvisioningArtifactOutput withServiceActionSummaries(ServiceActionSummary[] serviceActionSummaries) {
        this.serviceActionSummaries = serviceActionSummaries;
        return this;
    }
}