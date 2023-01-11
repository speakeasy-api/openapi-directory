package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLensReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListLensReviewsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MilestoneNumber")
    public Long milestoneNumber;
    public ListLensReviewsQueryParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListLensReviewsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}