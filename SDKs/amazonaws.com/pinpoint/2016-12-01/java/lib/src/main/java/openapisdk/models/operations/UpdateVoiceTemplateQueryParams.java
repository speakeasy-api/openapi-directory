package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVoiceTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=create-new-version")
    public Boolean createNewVersion;
    public UpdateVoiceTemplateQueryParams withCreateNewVersion(Boolean createNewVersion) {
        this.createNewVersion = createNewVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public UpdateVoiceTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}