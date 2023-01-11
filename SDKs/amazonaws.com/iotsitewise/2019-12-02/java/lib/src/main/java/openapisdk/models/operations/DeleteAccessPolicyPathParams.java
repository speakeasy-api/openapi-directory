package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPolicyId")
    public String accessPolicyId;
    public DeleteAccessPolicyPathParams withAccessPolicyId(String accessPolicyId) {
        this.accessPolicyId = accessPolicyId;
        return this;
    }
}