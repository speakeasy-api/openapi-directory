package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTerminationPolicyTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTerminationPolicyTypesActionEnum action;
    public PostDescribeTerminationPolicyTypesQueryParams withAction(PostDescribeTerminationPolicyTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTerminationPolicyTypesVersionEnum version;
    public PostDescribeTerminationPolicyTypesQueryParams withVersion(PostDescribeTerminationPolicyTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}