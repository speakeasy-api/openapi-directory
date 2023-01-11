package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PurgeCdnCachePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cdn_id")
    public String cdnId;
    public PurgeCdnCachePathParams withCdnId(String cdnId) {
        this.cdnId = cdnId;
        return this;
    }
}