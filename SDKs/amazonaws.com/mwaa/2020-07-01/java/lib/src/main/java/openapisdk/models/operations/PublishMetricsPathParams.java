package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EnvironmentName")
    public String environmentName;
    public PublishMetricsPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
}