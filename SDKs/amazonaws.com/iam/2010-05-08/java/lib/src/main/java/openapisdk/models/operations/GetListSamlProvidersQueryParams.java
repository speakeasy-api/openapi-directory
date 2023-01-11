package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListSamlProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListSamlProvidersActionEnum action;
    public GetListSamlProvidersQueryParams withAction(GetListSamlProvidersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListSamlProvidersVersionEnum version;
    public GetListSamlProvidersQueryParams withVersion(GetListSamlProvidersVersionEnum version) {
        this.version = version;
        return this;
    }
}