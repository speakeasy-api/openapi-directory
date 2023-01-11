package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreviewAgentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public PreviewAgentsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public PreviewAgentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}