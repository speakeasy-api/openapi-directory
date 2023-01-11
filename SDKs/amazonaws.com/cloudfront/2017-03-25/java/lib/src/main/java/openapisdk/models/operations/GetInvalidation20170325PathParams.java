package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvalidation20170325PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public GetInvalidation20170325PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetInvalidation20170325PathParams withId(String id) {
        this.id = id;
        return this;
    }
}