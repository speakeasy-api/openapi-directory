package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=create-new-version")
    public Boolean createNewVersion;
    public UpdateEmailTemplateQueryParams withCreateNewVersion(Boolean createNewVersion) {
        this.createNewVersion = createNewVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public UpdateEmailTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}