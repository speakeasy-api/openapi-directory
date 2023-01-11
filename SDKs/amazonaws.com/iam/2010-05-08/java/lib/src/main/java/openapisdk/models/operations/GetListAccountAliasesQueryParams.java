package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAccountAliasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAccountAliasesActionEnum action;
    public GetListAccountAliasesQueryParams withAction(GetListAccountAliasesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListAccountAliasesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListAccountAliasesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAccountAliasesVersionEnum version;
    public GetListAccountAliasesQueryParams withVersion(GetListAccountAliasesVersionEnum version) {
        this.version = version;
        return this;
    }
}