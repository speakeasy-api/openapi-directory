package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrunkInterfaceAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTrunkInterfaceAssociationsActionEnum action;
    public PostDescribeTrunkInterfaceAssociationsQueryParams withAction(PostDescribeTrunkInterfaceAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTrunkInterfaceAssociationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTrunkInterfaceAssociationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTrunkInterfaceAssociationsVersionEnum version;
    public PostDescribeTrunkInterfaceAssociationsQueryParams withVersion(PostDescribeTrunkInterfaceAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}