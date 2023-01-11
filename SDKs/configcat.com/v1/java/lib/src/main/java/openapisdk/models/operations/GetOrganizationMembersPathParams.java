package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationMembersPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}