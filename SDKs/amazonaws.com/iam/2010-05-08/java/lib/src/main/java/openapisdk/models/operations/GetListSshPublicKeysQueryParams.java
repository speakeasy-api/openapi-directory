package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListSshPublicKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListSshPublicKeysActionEnum action;
    public GetListSshPublicKeysQueryParams withAction(GetListSshPublicKeysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListSshPublicKeysQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListSshPublicKeysQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListSshPublicKeysQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListSshPublicKeysVersionEnum version;
    public GetListSshPublicKeysQueryParams withVersion(GetListSshPublicKeysVersionEnum version) {
        this.version = version;
        return this;
    }
}