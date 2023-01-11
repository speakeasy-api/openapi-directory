package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRouteResponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteRouteResponsePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public DeleteRouteResponsePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeResponseId")
    public String routeResponseId;
    public DeleteRouteResponsePathParams withRouteResponseId(String routeResponseId) {
        this.routeResponseId = routeResponseId;
        return this;
    }
}