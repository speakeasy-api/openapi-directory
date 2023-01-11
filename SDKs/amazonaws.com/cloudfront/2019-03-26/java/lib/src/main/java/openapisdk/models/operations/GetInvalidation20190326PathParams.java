package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvalidation20190326PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public GetInvalidation20190326PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetInvalidation20190326PathParams withId(String id) {
        this.id = id;
        return this;
    }
}