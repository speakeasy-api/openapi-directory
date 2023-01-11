package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteIntegrationPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationId")
    public String integrationId;
    public DeleteIntegrationPathParams withIntegrationId(String integrationId) {
        this.integrationId = integrationId;
        return this;
    }
}