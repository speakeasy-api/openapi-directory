package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFindingsPublicationConfigurationRequest {
    public PutFindingsPublicationConfigurationHeaders headers;
    public PutFindingsPublicationConfigurationRequest withHeaders(PutFindingsPublicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutFindingsPublicationConfigurationRequestBody request;
    public PutFindingsPublicationConfigurationRequest withRequest(PutFindingsPublicationConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}