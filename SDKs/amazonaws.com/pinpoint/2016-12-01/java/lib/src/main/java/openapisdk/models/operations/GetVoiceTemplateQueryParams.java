package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVoiceTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public GetVoiceTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}