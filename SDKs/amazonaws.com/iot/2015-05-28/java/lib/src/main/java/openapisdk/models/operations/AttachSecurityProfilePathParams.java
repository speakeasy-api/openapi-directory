package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachSecurityProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityProfileName")
    public String securityProfileName;
    public AttachSecurityProfilePathParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}