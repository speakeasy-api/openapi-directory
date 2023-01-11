package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachSecurityProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityProfileName")
    public String securityProfileName;
    public DetachSecurityProfilePathParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}