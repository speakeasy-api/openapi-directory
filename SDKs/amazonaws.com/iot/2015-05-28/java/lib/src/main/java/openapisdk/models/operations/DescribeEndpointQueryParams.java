package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endpointType")
    public String endpointType;
    public DescribeEndpointQueryParams withEndpointType(String endpointType) {
        this.endpointType = endpointType;
        return this;
    }
}