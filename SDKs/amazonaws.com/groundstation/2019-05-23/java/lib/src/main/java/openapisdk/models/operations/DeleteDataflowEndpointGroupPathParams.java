package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataflowEndpointGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataflowEndpointGroupId")
    public String dataflowEndpointGroupId;
    public DeleteDataflowEndpointGroupPathParams withDataflowEndpointGroupId(String dataflowEndpointGroupId) {
        this.dataflowEndpointGroupId = dataflowEndpointGroupId;
        return this;
    }
}