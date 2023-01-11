package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_version_id")
    public String apiVersionId;
    public RegistryCreateApiVersionQueryParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
}