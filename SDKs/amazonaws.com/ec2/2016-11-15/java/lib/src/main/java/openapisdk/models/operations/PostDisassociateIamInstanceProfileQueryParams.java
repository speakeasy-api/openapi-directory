package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateIamInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateIamInstanceProfileActionEnum action;
    public PostDisassociateIamInstanceProfileQueryParams withAction(PostDisassociateIamInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateIamInstanceProfileVersionEnum version;
    public PostDisassociateIamInstanceProfileQueryParams withVersion(PostDisassociateIamInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}