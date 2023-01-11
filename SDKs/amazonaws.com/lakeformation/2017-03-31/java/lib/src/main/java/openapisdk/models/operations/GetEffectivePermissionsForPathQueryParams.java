package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEffectivePermissionsForPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetEffectivePermissionsForPathQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetEffectivePermissionsForPathQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}