package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHiTsForQualificationTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListHiTsForQualificationTypeQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListHiTsForQualificationTypeQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}