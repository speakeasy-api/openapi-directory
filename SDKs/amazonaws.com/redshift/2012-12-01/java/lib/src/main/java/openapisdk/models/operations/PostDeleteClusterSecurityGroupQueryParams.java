package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClusterSecurityGroupActionEnum action;
    public PostDeleteClusterSecurityGroupQueryParams withAction(PostDeleteClusterSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClusterSecurityGroupVersionEnum version;
    public PostDeleteClusterSecurityGroupQueryParams withVersion(PostDeleteClusterSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}