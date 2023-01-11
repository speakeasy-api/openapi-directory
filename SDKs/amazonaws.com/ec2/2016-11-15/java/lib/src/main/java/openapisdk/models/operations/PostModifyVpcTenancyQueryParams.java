package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcTenancyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcTenancyActionEnum action;
    public PostModifyVpcTenancyQueryParams withAction(PostModifyVpcTenancyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcTenancyVersionEnum version;
    public PostModifyVpcTenancyQueryParams withVersion(PostModifyVpcTenancyVersionEnum version) {
        this.version = version;
        return this;
    }
}