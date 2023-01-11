package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleWithSamlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssumeRoleWithSamlActionEnum action;
    public PostAssumeRoleWithSamlQueryParams withAction(PostAssumeRoleWithSamlActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssumeRoleWithSamlVersionEnum version;
    public PostAssumeRoleWithSamlQueryParams withVersion(PostAssumeRoleWithSamlVersionEnum version) {
        this.version = version;
        return this;
    }
}