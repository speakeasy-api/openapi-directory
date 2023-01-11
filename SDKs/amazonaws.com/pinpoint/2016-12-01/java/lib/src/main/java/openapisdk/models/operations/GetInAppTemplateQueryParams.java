package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInAppTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public GetInAppTemplateQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}