package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesForTagOptionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListResourcesForTagOptionOutput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceDetails")
    public ResourceDetail[] resourceDetails;
    public ListResourcesForTagOptionOutput withResourceDetails(ResourceDetail[] resourceDetails) {
        this.resourceDetails = resourceDetails;
        return this;
    }
}