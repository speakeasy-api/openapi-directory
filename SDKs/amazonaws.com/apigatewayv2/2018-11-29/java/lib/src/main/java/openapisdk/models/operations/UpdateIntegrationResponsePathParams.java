package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIntegrationResponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateIntegrationResponsePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationId")
    public String integrationId;
    public UpdateIntegrationResponsePathParams withIntegrationId(String integrationId) {
        this.integrationId = integrationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationResponseId")
    public String integrationResponseId;
    public UpdateIntegrationResponsePathParams withIntegrationResponseId(String integrationResponseId) {
        this.integrationResponseId = integrationResponseId;
        return this;
    }
}