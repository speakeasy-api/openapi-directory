package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMonitoringSubscription20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public DeleteMonitoringSubscription20200531PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}