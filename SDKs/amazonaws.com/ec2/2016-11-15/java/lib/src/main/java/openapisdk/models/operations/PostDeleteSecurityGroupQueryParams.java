package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSecurityGroupActionEnum action;
    public PostDeleteSecurityGroupQueryParams withAction(PostDeleteSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSecurityGroupVersionEnum version;
    public PostDeleteSecurityGroupQueryParams withVersion(PostDeleteSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}