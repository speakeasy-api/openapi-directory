package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteListenerActionEnum action;
    public GetDeleteListenerQueryParams withAction(GetDeleteListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ListenerArn")
    public String listenerArn;
    public GetDeleteListenerQueryParams withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteListenerVersionEnum version;
    public GetDeleteListenerQueryParams withVersion(GetDeleteListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}