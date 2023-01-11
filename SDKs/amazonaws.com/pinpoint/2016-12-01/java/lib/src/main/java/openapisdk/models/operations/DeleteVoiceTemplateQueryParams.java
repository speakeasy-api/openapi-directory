package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVoiceTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DeleteVoiceTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}