package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetIntegrationPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationId")
    public String integrationId;
    public GetIntegrationPathParams withIntegrationId(String integrationId) {
        this.integrationId = integrationId;
        return this;
    }
}