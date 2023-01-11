package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRouteResponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateRouteResponsePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public UpdateRouteResponsePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeResponseId")
    public String routeResponseId;
    public UpdateRouteResponsePathParams withRouteResponseId(String routeResponseId) {
        this.routeResponseId = routeResponseId;
        return this;
    }
}