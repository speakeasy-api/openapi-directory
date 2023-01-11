package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeManagedPrefixListsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeManagedPrefixListsActionEnum action;
    public PostDescribeManagedPrefixListsQueryParams withAction(PostDescribeManagedPrefixListsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeManagedPrefixListsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeManagedPrefixListsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeManagedPrefixListsVersionEnum version;
    public PostDescribeManagedPrefixListsQueryParams withVersion(PostDescribeManagedPrefixListsVersionEnum version) {
        this.version = version;
        return this;
    }
}