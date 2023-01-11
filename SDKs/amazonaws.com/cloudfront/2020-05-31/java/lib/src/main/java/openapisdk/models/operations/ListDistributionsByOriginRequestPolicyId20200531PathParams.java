package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDistributionsByOriginRequestPolicyId20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=OriginRequestPolicyId")
    public String originRequestPolicyId;
    public ListDistributionsByOriginRequestPolicyId20200531PathParams withOriginRequestPolicyId(String originRequestPolicyId) {
        this.originRequestPolicyId = originRequestPolicyId;
        return this;
    }
}