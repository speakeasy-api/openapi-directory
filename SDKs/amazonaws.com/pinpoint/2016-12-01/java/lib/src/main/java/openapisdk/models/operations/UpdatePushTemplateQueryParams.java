package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=create-new-version")
    public Boolean createNewVersion;
    public UpdatePushTemplateQueryParams withCreateNewVersion(Boolean createNewVersion) {
        this.createNewVersion = createNewVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public UpdatePushTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}