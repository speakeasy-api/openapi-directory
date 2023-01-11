package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWithdrawByoipCidrQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostWithdrawByoipCidrActionEnum action;
    public PostWithdrawByoipCidrQueryParams withAction(PostWithdrawByoipCidrActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostWithdrawByoipCidrVersionEnum version;
    public PostWithdrawByoipCidrQueryParams withVersion(PostWithdrawByoipCidrVersionEnum version) {
        this.version = version;
        return this;
    }
}