package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationResponsePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetIntegrationResponsePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationId")
    public String integrationId;
    public GetIntegrationResponsePathParams withIntegrationId(String integrationId) {
        this.integrationId = integrationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationResponseId")
    public String integrationResponseId;
    public GetIntegrationResponsePathParams withIntegrationResponseId(String integrationResponseId) {
        this.integrationResponseId = integrationResponseId;
        return this;
    }
}