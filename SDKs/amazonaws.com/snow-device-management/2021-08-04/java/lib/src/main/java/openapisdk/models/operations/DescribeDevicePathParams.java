package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedDeviceId")
    public String managedDeviceId;
    public DescribeDevicePathParams withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
}