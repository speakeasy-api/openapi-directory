package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvalidation20181105PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public GetInvalidation20181105PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetInvalidation20181105PathParams withId(String id) {
        this.id = id;
        return this;
    }
}