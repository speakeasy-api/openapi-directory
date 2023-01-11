package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePrincipalIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePrincipalIdFormatActionEnum action;
    public PostDescribePrincipalIdFormatQueryParams withAction(PostDescribePrincipalIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribePrincipalIdFormatQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribePrincipalIdFormatQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePrincipalIdFormatVersionEnum version;
    public PostDescribePrincipalIdFormatQueryParams withVersion(PostDescribePrincipalIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}