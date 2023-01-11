package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMonitoringSubscription20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DistributionId")
    public String distributionId;
    public CreateMonitoringSubscription20200531PathParams withDistributionId(String distributionId) {
        this.distributionId = distributionId;
        return this;
    }
}