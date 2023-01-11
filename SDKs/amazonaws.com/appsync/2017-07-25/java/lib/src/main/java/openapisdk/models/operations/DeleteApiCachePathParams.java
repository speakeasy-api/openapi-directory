package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteApiCachePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}