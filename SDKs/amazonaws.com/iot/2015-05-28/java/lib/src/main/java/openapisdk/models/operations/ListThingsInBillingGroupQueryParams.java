package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingsInBillingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingsInBillingGroupQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingsInBillingGroupQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}