package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeTerminationPolicyTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeTerminationPolicyTypesActionEnum action;
    public GetDescribeTerminationPolicyTypesQueryParams withAction(GetDescribeTerminationPolicyTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeTerminationPolicyTypesVersionEnum version;
    public GetDescribeTerminationPolicyTypesQueryParams withVersion(GetDescribeTerminationPolicyTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}