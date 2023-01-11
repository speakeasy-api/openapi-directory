package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySecurityGroupRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySecurityGroupRulesActionEnum action;
    public PostModifySecurityGroupRulesQueryParams withAction(PostModifySecurityGroupRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySecurityGroupRulesVersionEnum version;
    public PostModifySecurityGroupRulesQueryParams withVersion(PostModifySecurityGroupRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}