package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebBackendRecreateSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceRecreate request;
    public WebBackendRecreateSourceRequest withRequest(openapisdk.models.shared.SourceRecreate request) {
        this.request = request;
        return this;
    }
}