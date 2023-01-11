package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayId")
    public String gatewayId;
    public DescribeGatewayPathParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}