package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceActionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListServiceActionsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionSummaries")
    public ServiceActionSummary[] serviceActionSummaries;
    public ListServiceActionsOutput withServiceActionSummaries(ServiceActionSummary[] serviceActionSummaries) {
        this.serviceActionSummaries = serviceActionSummaries;
        return this;
    }
}