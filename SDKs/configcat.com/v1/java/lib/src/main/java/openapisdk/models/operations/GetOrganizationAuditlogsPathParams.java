package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationAuditlogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationAuditlogsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}