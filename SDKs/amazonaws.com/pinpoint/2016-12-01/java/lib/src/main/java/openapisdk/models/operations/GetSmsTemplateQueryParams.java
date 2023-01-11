package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSmsTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public GetSmsTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}