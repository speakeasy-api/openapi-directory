package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateDataShareConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateDataShareConsumerActionEnum action;
    public PostDisassociateDataShareConsumerQueryParams withAction(PostDisassociateDataShareConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateDataShareConsumerVersionEnum version;
    public PostDisassociateDataShareConsumerQueryParams withVersion(PostDisassociateDataShareConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}