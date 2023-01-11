package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportTransitGatewayRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExportTransitGatewayRoutesActionEnum action;
    public PostExportTransitGatewayRoutesQueryParams withAction(PostExportTransitGatewayRoutesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExportTransitGatewayRoutesVersionEnum version;
    public PostExportTransitGatewayRoutesQueryParams withVersion(PostExportTransitGatewayRoutesVersionEnum version) {
        this.version = version;
        return this;
    }
}