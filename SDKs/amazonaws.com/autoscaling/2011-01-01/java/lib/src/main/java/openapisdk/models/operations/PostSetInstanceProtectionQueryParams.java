package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetInstanceProtectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetInstanceProtectionActionEnum action;
    public PostSetInstanceProtectionQueryParams withAction(PostSetInstanceProtectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetInstanceProtectionVersionEnum version;
    public PostSetInstanceProtectionQueryParams withVersion(PostSetInstanceProtectionVersionEnum version) {
        this.version = version;
        return this;
    }
}