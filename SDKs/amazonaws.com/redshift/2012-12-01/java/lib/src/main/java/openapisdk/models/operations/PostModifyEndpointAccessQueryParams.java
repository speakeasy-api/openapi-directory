package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyEndpointAccessActionEnum action;
    public PostModifyEndpointAccessQueryParams withAction(PostModifyEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyEndpointAccessVersionEnum version;
    public PostModifyEndpointAccessQueryParams withVersion(PostModifyEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}