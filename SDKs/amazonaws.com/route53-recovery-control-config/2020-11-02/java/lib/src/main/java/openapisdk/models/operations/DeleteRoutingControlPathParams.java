package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRoutingControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoutingControlArn")
    public String routingControlArn;
    public DeleteRoutingControlPathParams withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
}