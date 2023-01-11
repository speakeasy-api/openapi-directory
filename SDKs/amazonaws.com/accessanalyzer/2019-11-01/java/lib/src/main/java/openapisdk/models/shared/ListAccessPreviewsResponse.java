package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccessPreviewsResponse {
    @JsonProperty("accessPreviews")
    public AccessPreviewSummary[] accessPreviews;
    public ListAccessPreviewsResponse withAccessPreviews(AccessPreviewSummary[] accessPreviews) {
        this.accessPreviews = accessPreviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAccessPreviewsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}