package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSecurityProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityProfileName")
    public String securityProfileName;
    public DeleteSecurityProfilePathParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}