package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeprovisionByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeprovisionByoipCidrActionEnum action;
    public PostDeprovisionByoipCidrQueryParams withAction(PostDeprovisionByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeprovisionByoipCidrVersionEnum version;
    public PostDeprovisionByoipCidrQueryParams withVersion(PostDeprovisionByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}