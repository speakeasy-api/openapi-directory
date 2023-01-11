package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsRequest {
    public GetDomainsHeaders headers;
    public GetDomainsRequest withHeaders(GetDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDomainsRequest request;
    public GetDomainsRequest withRequest(openapisdk.models.shared.GetDomainsRequest request) {
        this.request = request;
        return this;
    }
}