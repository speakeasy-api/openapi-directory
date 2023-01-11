package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableOrganizationAdminAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adminAccountId")
    public String adminAccountId;
    public DisableOrganizationAdminAccountQueryParams withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
}