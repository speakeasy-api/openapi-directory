package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyIdentityIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyIdentityIdFormatActionEnum action;
    public GetModifyIdentityIdFormatQueryParams withAction(GetModifyIdentityIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrincipalArn")
    public String principalArn;
    public GetModifyIdentityIdFormatQueryParams withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public GetModifyIdentityIdFormatQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UseLongIds")
    public Boolean useLongIds;
    public GetModifyIdentityIdFormatQueryParams withUseLongIds(Boolean useLongIds) {
        this.useLongIds = useLongIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyIdentityIdFormatVersionEnum version;
    public GetModifyIdentityIdFormatQueryParams withVersion(GetModifyIdentityIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}