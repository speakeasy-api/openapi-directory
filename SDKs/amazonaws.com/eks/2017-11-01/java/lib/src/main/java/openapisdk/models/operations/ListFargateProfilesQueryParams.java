package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFargateProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListFargateProfilesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListFargateProfilesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}