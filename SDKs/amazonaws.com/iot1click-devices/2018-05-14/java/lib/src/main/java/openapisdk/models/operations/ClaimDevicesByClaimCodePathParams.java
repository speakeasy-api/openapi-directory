package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimDevicesByClaimCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=claimCode")
    public String claimCode;
    public ClaimDevicesByClaimCodePathParams withClaimCode(String claimCode) {
        this.claimCode = claimCode;
        return this;
    }
}