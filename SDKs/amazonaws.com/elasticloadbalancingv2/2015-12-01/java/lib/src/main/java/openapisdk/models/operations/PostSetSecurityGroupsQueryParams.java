package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetSecurityGroupsActionEnum action;
    public PostSetSecurityGroupsQueryParams withAction(PostSetSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetSecurityGroupsVersionEnum version;
    public PostSetSecurityGroupsQueryParams withVersion(PostSetSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}