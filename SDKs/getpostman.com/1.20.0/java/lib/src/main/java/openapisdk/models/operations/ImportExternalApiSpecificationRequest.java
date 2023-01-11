package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportExternalApiSpecificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImportExternalApiSpecificationRequestBody request;
    public ImportExternalApiSpecificationRequest withRequest(ImportExternalApiSpecificationRequestBody request) {
        this.request = request;
        return this;
    }
}