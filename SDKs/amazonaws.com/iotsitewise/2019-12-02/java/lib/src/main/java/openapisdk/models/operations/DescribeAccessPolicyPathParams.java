package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPolicyId")
    public String accessPolicyId;
    public DescribeAccessPolicyPathParams withAccessPolicyId(String accessPolicyId) {
        this.accessPolicyId = accessPolicyId;
        return this;
    }
}