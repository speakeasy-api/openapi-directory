package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateApplicationSettingsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}