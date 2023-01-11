package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateDataShareConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateDataShareConsumerActionEnum action;
    public PostAssociateDataShareConsumerQueryParams withAction(PostAssociateDataShareConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateDataShareConsumerVersionEnum version;
    public PostAssociateDataShareConsumerQueryParams withVersion(PostAssociateDataShareConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}