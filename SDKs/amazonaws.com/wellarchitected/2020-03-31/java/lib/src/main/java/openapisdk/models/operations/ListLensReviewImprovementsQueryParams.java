package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLensReviewImprovementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListLensReviewImprovementsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MilestoneNumber")
    public Long milestoneNumber;
    public ListLensReviewImprovementsQueryParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListLensReviewImprovementsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PillarId")
    public String pillarId;
    public ListLensReviewImprovementsQueryParams withPillarId(String pillarId) {
        this.pillarId = pillarId;
        return this;
    }
}