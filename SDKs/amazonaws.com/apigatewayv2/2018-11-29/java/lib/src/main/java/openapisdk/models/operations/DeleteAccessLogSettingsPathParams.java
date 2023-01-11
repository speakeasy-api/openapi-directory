package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessLogSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteAccessLogSettingsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stageName")
    public String stageName;
    public DeleteAccessLogSettingsPathParams withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}