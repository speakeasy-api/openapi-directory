package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCdnEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cdn_id")
    public String cdnId;
    public UpdateCdnEndpointPathParams withCdnId(String cdnId) {
        this.cdnId = cdnId;
        return this;
    }
}