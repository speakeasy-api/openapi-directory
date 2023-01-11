package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentRunAgentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListAssessmentRunAgentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAssessmentRunAgentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}