package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRouteSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteRouteSettingsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeKey")
    public String routeKey;
    public DeleteRouteSettingsPathParams withRouteKey(String routeKey) {
        this.routeKey = routeKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stageName")
    public String stageName;
    public DeleteRouteSettingsPathParams withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}