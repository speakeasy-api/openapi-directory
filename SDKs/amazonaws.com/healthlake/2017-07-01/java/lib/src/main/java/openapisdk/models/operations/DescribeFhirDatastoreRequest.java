package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFhirDatastoreRequest {
    public DescribeFhirDatastoreHeaders headers;
    public DescribeFhirDatastoreRequest withHeaders(DescribeFhirDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFhirDatastoreRequest request;
    public DescribeFhirDatastoreRequest withRequest(openapisdk.models.shared.DescribeFhirDatastoreRequest request) {
        this.request = request;
        return this;
    }
}