package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFarmOrganizationByTypeAndIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=farmOrganizationId")
    public String farmOrganizationId;
    public FetchFarmOrganizationByTypeAndIdPathParams withFarmOrganizationId(String farmOrganizationId) {
        this.farmOrganizationId = farmOrganizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=farmOrganizationType")
    public openapisdk.models.shared.FarmOrganizationTypeEnum farmOrganizationType;
    public FetchFarmOrganizationByTypeAndIdPathParams withFarmOrganizationType(openapisdk.models.shared.FarmOrganizationTypeEnum farmOrganizationType) {
        this.farmOrganizationType = farmOrganizationType;
        return this;
    }
}