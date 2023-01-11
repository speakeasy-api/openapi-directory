package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbSecurityGroupActionEnum action;
    public PostDeleteDbSecurityGroupQueryParams withAction(PostDeleteDbSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbSecurityGroupVersionEnum version;
    public PostDeleteDbSecurityGroupQueryParams withVersion(PostDeleteDbSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}