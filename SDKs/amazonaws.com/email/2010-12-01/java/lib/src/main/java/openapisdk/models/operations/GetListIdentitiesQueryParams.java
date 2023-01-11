package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListIdentitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListIdentitiesActionEnum action;
    public GetListIdentitiesQueryParams withAction(GetListIdentitiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IdentityType")
    public GetListIdentitiesIdentityTypeEnum identityType;
    public GetListIdentitiesQueryParams withIdentityType(GetListIdentitiesIdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListIdentitiesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListIdentitiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListIdentitiesVersionEnum version;
    public GetListIdentitiesQueryParams withVersion(GetListIdentitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}