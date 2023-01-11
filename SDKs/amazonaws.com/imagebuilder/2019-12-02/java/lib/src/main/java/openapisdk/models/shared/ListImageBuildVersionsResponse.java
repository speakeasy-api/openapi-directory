package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImageBuildVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSummaryList")
    public ImageSummary[] imageSummaryList;
    public ListImageBuildVersionsResponse withImageSummaryList(ImageSummary[] imageSummaryList) {
        this.imageSummaryList = imageSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImageBuildVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListImageBuildVersionsResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}