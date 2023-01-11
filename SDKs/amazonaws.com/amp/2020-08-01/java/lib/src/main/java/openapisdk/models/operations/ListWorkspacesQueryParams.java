package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkspacesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alias")
    public String alias;
    public ListWorkspacesQueryParams withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListWorkspacesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListWorkspacesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}