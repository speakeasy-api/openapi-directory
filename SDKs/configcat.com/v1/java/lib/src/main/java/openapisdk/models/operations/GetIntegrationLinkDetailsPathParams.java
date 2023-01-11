package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationLinkDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationLinkType")
    public openapisdk.models.shared.IntegrationLinkTypeEnum integrationLinkType;
    public GetIntegrationLinkDetailsPathParams withIntegrationLinkType(openapisdk.models.shared.IntegrationLinkTypeEnum integrationLinkType) {
        this.integrationLinkType = integrationLinkType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public GetIntegrationLinkDetailsPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}