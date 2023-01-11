package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRouteResponsesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetRouteResponsesPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public GetRouteResponsesPathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
}