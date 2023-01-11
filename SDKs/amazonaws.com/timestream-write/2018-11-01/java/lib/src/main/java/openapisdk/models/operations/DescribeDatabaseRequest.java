package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatabaseRequest {
    public DescribeDatabaseHeaders headers;
    public DescribeDatabaseRequest withHeaders(DescribeDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDatabaseRequest request;
    public DescribeDatabaseRequest withRequest(openapisdk.models.shared.DescribeDatabaseRequest request) {
        this.request = request;
        return this;
    }
}