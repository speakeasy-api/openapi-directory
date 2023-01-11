package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetRoutePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public GetRoutePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
}