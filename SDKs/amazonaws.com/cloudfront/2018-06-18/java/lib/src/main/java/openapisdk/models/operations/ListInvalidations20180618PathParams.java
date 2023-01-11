package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInvalidations20180618PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public ListInvalidations20180618PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}