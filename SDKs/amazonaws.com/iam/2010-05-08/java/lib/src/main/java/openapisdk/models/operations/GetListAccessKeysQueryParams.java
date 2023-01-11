package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAccessKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAccessKeysActionEnum action;
    public GetListAccessKeysQueryParams withAction(GetListAccessKeysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListAccessKeysQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListAccessKeysQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListAccessKeysQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAccessKeysVersionEnum version;
    public GetListAccessKeysQueryParams withVersion(GetListAccessKeysVersionEnum version) {
        this.version = version;
        return this;
    }
}