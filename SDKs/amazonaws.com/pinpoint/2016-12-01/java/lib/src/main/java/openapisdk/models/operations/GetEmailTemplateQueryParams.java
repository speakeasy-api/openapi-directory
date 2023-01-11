package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public GetEmailTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}