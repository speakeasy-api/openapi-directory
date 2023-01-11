package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfacesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNetworkInterfacesActionEnum action;
    public PostDescribeNetworkInterfacesQueryParams withAction(PostDescribeNetworkInterfacesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeNetworkInterfacesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeNetworkInterfacesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNetworkInterfacesVersionEnum version;
    public PostDescribeNetworkInterfacesQueryParams withVersion(PostDescribeNetworkInterfacesVersionEnum version) {
        this.version = version;
        return this;
    }
}