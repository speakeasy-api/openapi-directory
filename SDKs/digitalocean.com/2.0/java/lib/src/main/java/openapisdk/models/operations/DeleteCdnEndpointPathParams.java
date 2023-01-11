package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCdnEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cdn_id")
    public String cdnId;
    public DeleteCdnEndpointPathParams withCdnId(String cdnId) {
        this.cdnId = cdnId;
        return this;
    }
}