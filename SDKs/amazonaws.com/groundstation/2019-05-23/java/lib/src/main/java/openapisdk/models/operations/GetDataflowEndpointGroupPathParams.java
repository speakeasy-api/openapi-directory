package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataflowEndpointGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataflowEndpointGroupId")
    public String dataflowEndpointGroupId;
    public GetDataflowEndpointGroupPathParams withDataflowEndpointGroupId(String dataflowEndpointGroupId) {
        this.dataflowEndpointGroupId = dataflowEndpointGroupId;
        return this;
    }
}