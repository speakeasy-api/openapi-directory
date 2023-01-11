package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertificatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateCertificatesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}