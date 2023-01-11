package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSmsTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DeleteSmsTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}