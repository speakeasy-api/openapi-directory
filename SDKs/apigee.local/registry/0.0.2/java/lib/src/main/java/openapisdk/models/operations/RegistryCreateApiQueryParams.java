package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_id")
    public String apiId;
    public RegistryCreateApiQueryParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}