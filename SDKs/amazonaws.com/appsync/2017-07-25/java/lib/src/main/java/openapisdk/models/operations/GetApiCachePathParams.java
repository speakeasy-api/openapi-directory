package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetApiCachePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}