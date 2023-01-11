package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSecurityGroupEgressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeSecurityGroupEgressActionEnum action;
    public PostRevokeSecurityGroupEgressQueryParams withAction(PostRevokeSecurityGroupEgressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeSecurityGroupEgressVersionEnum version;
    public PostRevokeSecurityGroupEgressQueryParams withVersion(PostRevokeSecurityGroupEgressVersionEnum version) {
        this.version = version;
        return this;
    }
}