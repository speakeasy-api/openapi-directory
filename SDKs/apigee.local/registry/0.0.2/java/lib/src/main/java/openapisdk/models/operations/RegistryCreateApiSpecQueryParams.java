package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateApiSpecQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_spec_id")
    public String apiSpecId;
    public RegistryCreateApiSpecQueryParams withApiSpecId(String apiSpecId) {
        this.apiSpecId = apiSpecId;
        return this;
    }
}