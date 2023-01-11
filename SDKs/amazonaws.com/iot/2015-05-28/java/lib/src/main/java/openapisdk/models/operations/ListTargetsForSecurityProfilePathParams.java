package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTargetsForSecurityProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=securityProfileName")
    public String securityProfileName;
    public ListTargetsForSecurityProfilePathParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}