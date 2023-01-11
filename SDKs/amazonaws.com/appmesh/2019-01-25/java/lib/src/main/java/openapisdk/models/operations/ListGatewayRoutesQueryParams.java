package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGatewayRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListGatewayRoutesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public ListGatewayRoutesQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListGatewayRoutesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}