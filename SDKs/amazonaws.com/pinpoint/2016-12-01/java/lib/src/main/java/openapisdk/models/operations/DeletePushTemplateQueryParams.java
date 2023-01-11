package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePushTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DeletePushTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}