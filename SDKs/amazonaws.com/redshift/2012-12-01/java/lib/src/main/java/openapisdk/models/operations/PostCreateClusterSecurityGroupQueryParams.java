package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClusterSecurityGroupActionEnum action;
    public PostCreateClusterSecurityGroupQueryParams withAction(PostCreateClusterSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClusterSecurityGroupVersionEnum version;
    public PostCreateClusterSecurityGroupQueryParams withVersion(PostCreateClusterSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}