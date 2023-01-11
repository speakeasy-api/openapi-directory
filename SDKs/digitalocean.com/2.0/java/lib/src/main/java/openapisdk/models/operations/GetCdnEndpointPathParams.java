package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCdnEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cdn_id")
    public String cdnId;
    public GetCdnEndpointPathParams withCdnId(String cdnId) {
        this.cdnId = cdnId;
        return this;
    }
}