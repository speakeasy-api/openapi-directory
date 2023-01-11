package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkerConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workerConfigurationArn")
    public String workerConfigurationArn;
    public DescribeWorkerConfigurationPathParams withWorkerConfigurationArn(String workerConfigurationArn) {
        this.workerConfigurationArn = workerConfigurationArn;
        return this;
    }
}