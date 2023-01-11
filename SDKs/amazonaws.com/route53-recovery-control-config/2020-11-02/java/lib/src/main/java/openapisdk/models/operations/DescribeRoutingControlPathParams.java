package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRoutingControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoutingControlArn")
    public String routingControlArn;
    public DescribeRoutingControlPathParams withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
}