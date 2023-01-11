package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchTransitGatewayRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSearchTransitGatewayRoutesActionEnum action;
    public PostSearchTransitGatewayRoutesQueryParams withAction(PostSearchTransitGatewayRoutesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSearchTransitGatewayRoutesVersionEnum version;
    public PostSearchTransitGatewayRoutesQueryParams withVersion(PostSearchTransitGatewayRoutesVersionEnum version) {
        this.version = version;
        return this;
    }
}