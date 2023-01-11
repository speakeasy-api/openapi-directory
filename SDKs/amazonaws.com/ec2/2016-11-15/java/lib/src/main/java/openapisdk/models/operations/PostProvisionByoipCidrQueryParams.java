package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProvisionByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostProvisionByoipCidrActionEnum action;
    public PostProvisionByoipCidrQueryParams withAction(PostProvisionByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostProvisionByoipCidrVersionEnum version;
    public PostProvisionByoipCidrQueryParams withVersion(PostProvisionByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}