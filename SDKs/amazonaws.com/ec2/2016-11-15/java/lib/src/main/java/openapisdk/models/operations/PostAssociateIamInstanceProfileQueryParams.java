package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateIamInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateIamInstanceProfileActionEnum action;
    public PostAssociateIamInstanceProfileQueryParams withAction(PostAssociateIamInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateIamInstanceProfileVersionEnum version;
    public PostAssociateIamInstanceProfileQueryParams withVersion(PostAssociateIamInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}