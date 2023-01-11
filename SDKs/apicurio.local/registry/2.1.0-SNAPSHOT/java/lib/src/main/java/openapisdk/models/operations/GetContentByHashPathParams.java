package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentByHashPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentHash")
    public String contentHash;
    public GetContentByHashPathParams withContentHash(String contentHash) {
        this.contentHash = contentHash;
        return this;
    }
}