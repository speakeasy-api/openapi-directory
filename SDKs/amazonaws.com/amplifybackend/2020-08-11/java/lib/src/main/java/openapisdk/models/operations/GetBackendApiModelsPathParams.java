package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBackendApiModelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetBackendApiModelsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=backendEnvironmentName")
    public String backendEnvironmentName;
    public GetBackendApiModelsPathParams withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
}