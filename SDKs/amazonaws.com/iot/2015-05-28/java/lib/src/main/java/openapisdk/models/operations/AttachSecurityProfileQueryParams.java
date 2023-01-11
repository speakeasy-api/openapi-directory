package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachSecurityProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileTargetArn")
    public String securityProfileTargetArn;
    public AttachSecurityProfileQueryParams withSecurityProfileTargetArn(String securityProfileTargetArn) {
        this.securityProfileTargetArn = securityProfileTargetArn;
        return this;
    }
}