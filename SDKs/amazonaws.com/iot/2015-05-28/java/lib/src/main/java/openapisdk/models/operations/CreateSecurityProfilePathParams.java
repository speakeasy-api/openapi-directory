package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSecurityProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityProfileName")
    public String securityProfileName;
    public CreateSecurityProfilePathParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}