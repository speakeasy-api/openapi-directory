package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateStorageLocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateStorageLocationActionEnum action;
    public GetCreateStorageLocationQueryParams withAction(GetCreateStorageLocationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateStorageLocationVersionEnum version;
    public GetCreateStorageLocationQueryParams withVersion(GetCreateStorageLocationVersionEnum version) {
        this.version = version;
        return this;
    }
}