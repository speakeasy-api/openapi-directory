package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuditLogGetAuditLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public AuditLogGetAuditLogPathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}