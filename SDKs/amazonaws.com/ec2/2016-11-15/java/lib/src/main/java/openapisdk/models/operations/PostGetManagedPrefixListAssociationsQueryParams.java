package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetManagedPrefixListAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetManagedPrefixListAssociationsActionEnum action;
    public PostGetManagedPrefixListAssociationsQueryParams withAction(PostGetManagedPrefixListAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetManagedPrefixListAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetManagedPrefixListAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetManagedPrefixListAssociationsVersionEnum version;
    public PostGetManagedPrefixListAssociationsQueryParams withVersion(PostGetManagedPrefixListAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}