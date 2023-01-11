package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSmsTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=create-new-version")
    public Boolean createNewVersion;
    public UpdateSmsTemplateQueryParams withCreateNewVersion(Boolean createNewVersion) {
        this.createNewVersion = createNewVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public UpdateSmsTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}