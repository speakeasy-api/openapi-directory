package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharityOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charity_org_id")
    public String charityOrgId;
    public GetCharityOrgPathParams withCharityOrgId(String charityOrgId) {
        this.charityOrgId = charityOrgId;
        return this;
    }
}