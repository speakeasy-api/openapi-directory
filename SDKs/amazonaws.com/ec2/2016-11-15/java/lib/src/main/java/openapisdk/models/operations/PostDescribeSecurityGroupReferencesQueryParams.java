package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSecurityGroupReferencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSecurityGroupReferencesActionEnum action;
    public PostDescribeSecurityGroupReferencesQueryParams withAction(PostDescribeSecurityGroupReferencesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSecurityGroupReferencesVersionEnum version;
    public PostDescribeSecurityGroupReferencesQueryParams withVersion(PostDescribeSecurityGroupReferencesVersionEnum version) {
        this.version = version;
        return this;
    }
}