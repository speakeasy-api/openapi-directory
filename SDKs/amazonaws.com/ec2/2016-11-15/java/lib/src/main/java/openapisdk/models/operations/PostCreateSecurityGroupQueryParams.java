package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSecurityGroupActionEnum action;
    public PostCreateSecurityGroupQueryParams withAction(PostCreateSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSecurityGroupVersionEnum version;
    public PostCreateSecurityGroupQueryParams withVersion(PostCreateSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}