package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveClientIdFromOpenIdConnectProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveClientIdFromOpenIdConnectProviderActionEnum action;
    public PostRemoveClientIdFromOpenIdConnectProviderQueryParams withAction(PostRemoveClientIdFromOpenIdConnectProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveClientIdFromOpenIdConnectProviderVersionEnum version;
    public PostRemoveClientIdFromOpenIdConnectProviderQueryParams withVersion(PostRemoveClientIdFromOpenIdConnectProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}