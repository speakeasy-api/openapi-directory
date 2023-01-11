package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInAppTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DeleteInAppTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}