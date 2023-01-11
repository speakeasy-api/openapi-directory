package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInvalidations20171030PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public ListInvalidations20171030PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}