package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfirmProductInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostConfirmProductInstanceActionEnum action;
    public PostConfirmProductInstanceQueryParams withAction(PostConfirmProductInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostConfirmProductInstanceVersionEnum version;
    public PostConfirmProductInstanceQueryParams withVersion(PostConfirmProductInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}