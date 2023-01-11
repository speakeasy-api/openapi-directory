package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListMfaDeviceTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListMfaDeviceTagsActionEnum action;
    public GetListMfaDeviceTagsQueryParams withAction(GetListMfaDeviceTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListMfaDeviceTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListMfaDeviceTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetListMfaDeviceTagsQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListMfaDeviceTagsVersionEnum version;
    public GetListMfaDeviceTagsQueryParams withVersion(GetListMfaDeviceTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}