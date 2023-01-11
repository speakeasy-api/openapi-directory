package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeContinuousExportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public DescribeContinuousExportsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeContinuousExportsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}