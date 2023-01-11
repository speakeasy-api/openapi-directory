package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharityOrgByLegacyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=legacy_charity_org_id")
    public String legacyCharityOrgId;
    public GetCharityOrgByLegacyIdQueryParams withLegacyCharityOrgId(String legacyCharityOrgId) {
        this.legacyCharityOrgId = legacyCharityOrgId;
        return this;
    }
}