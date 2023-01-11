package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedRoute53HealthChecksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoutingControlArn")
    public String routingControlArn;
    public ListAssociatedRoute53HealthChecksPathParams withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
}