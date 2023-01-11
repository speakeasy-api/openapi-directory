package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAdvertiseByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAdvertiseByoipCidrActionEnum action;
    public PostAdvertiseByoipCidrQueryParams withAction(PostAdvertiseByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAdvertiseByoipCidrVersionEnum version;
    public PostAdvertiseByoipCidrQueryParams withVersion(PostAdvertiseByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}