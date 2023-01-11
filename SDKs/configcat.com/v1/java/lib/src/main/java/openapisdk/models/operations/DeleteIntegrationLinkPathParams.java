package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIntegrationLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public DeleteIntegrationLinkPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=integrationLinkType")
    public openapisdk.models.shared.IntegrationLinkTypeEnum integrationLinkType;
    public DeleteIntegrationLinkPathParams withIntegrationLinkType(openapisdk.models.shared.IntegrationLinkTypeEnum integrationLinkType) {
        this.integrationLinkType = integrationLinkType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DeleteIntegrationLinkPathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public DeleteIntegrationLinkPathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}