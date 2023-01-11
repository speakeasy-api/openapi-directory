package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachSecurityProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileTargetArn")
    public String securityProfileTargetArn;
    public DetachSecurityProfileQueryParams withSecurityProfileTargetArn(String securityProfileTargetArn) {
        this.securityProfileTargetArn = securityProfileTargetArn;
        return this;
    }
}