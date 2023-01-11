package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FlushApiCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public FlushApiCachePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}