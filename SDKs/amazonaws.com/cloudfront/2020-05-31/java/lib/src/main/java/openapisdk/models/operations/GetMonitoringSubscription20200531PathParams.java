package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMonitoringSubscription20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public GetMonitoringSubscription20200531PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}