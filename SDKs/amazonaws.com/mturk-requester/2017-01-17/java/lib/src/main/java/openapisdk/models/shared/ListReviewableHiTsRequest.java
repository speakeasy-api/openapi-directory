package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReviewableHiTsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public ListReviewableHiTsRequest withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListReviewableHiTsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListReviewableHiTsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ReviewableHitStatusEnum status;
    public ListReviewableHiTsRequest withStatus(ReviewableHitStatusEnum status) {
        this.status = status;
        return this;
    }
}