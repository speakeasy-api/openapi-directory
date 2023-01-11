package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInvalidations20190326PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public ListInvalidations20190326PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}