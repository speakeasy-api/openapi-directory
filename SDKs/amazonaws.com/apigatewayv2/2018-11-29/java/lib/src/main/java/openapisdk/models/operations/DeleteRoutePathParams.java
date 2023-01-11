package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteRoutePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public DeleteRoutePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
}