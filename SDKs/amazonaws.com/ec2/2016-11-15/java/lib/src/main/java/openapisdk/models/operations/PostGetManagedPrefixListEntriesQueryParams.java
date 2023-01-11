package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetManagedPrefixListEntriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetManagedPrefixListEntriesActionEnum action;
    public PostGetManagedPrefixListEntriesQueryParams withAction(PostGetManagedPrefixListEntriesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetManagedPrefixListEntriesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetManagedPrefixListEntriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetManagedPrefixListEntriesVersionEnum version;
    public PostGetManagedPrefixListEntriesQueryParams withVersion(PostGetManagedPrefixListEntriesVersionEnum version) {
        this.version = version;
        return this;
    }
}