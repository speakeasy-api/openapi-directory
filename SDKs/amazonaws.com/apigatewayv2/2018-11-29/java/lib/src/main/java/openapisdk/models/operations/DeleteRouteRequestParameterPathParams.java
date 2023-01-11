package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRouteRequestParameterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteRouteRequestParameterPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=requestParameterKey")
    public String requestParameterKey;
    public DeleteRouteRequestParameterPathParams withRequestParameterKey(String requestParameterKey) {
        this.requestParameterKey = requestParameterKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeId")
    public String routeId;
    public DeleteRouteRequestParameterPathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
}