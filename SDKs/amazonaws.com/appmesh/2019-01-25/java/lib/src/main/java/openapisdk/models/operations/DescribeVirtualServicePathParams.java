package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVirtualServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DescribeVirtualServicePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualServiceName")
    public String virtualServiceName;
    public DescribeVirtualServicePathParams withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}