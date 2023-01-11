package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateBackendApiModelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GenerateBackendApiModelsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=backendEnvironmentName")
    public String backendEnvironmentName;
    public GenerateBackendApiModelsPathParams withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
}