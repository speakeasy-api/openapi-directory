package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateApiCachePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}