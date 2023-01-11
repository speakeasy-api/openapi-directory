package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbSecurityGroupActionEnum action;
    public PostCreateDbSecurityGroupQueryParams withAction(PostCreateDbSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbSecurityGroupVersionEnum version;
    public PostCreateDbSecurityGroupQueryParams withVersion(PostCreateDbSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}