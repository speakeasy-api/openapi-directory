package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingViolationsSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=compliance_type")
    public String complianceType;
    public GetListingViolationsSummaryQueryParams withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
}