package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeviceEc2InstancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedDeviceId")
    public String managedDeviceId;
    public DescribeDeviceEc2InstancesPathParams withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
}