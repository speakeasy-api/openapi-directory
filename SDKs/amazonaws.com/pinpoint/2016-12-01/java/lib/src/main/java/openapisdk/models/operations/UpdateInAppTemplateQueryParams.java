package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInAppTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=create-new-version")
    public Boolean createNewVersion;
    public UpdateInAppTemplateQueryParams withCreateNewVersion(Boolean createNewVersion) {
        this.createNewVersion = createNewVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public UpdateInAppTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}