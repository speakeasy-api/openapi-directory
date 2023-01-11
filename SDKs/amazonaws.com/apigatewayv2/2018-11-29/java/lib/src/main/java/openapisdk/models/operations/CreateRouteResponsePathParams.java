package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRouteResponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateRouteResponsePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public CreateRouteResponsePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
}