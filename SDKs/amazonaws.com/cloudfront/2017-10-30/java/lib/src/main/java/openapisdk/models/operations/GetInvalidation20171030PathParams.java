package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvalidation20171030PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public GetInvalidation20171030PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetInvalidation20171030PathParams withId(String id) {
        this.id = id;
        return this;
    }
}