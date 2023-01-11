package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPolicyId")
    public String accessPolicyId;
    public UpdateAccessPolicyPathParams withAccessPolicyId(String accessPolicyId) {
        this.accessPolicyId = accessPolicyId;
        return this;
    }
}