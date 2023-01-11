package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePrefixListsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePrefixListsActionEnum action;
    public PostDescribePrefixListsQueryParams withAction(PostDescribePrefixListsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribePrefixListsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribePrefixListsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePrefixListsVersionEnum version;
    public PostDescribePrefixListsQueryParams withVersion(PostDescribePrefixListsVersionEnum version) {
        this.version = version;
        return this;
    }
}