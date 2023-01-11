package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListMfaDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListMfaDevicesActionEnum action;
    public GetListMfaDevicesQueryParams withAction(GetListMfaDevicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListMfaDevicesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListMfaDevicesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListMfaDevicesQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListMfaDevicesVersionEnum version;
    public GetListMfaDevicesQueryParams withVersion(GetListMfaDevicesVersionEnum version) {
        this.version = version;
        return this;
    }
}