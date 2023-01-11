package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DeleteEmailTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}