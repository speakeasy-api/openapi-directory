package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCsvHeaderRequest {
    public GetCsvHeaderHeaders headers;
    public GetCsvHeaderRequest withHeaders(GetCsvHeaderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCsvHeaderRequest request;
    public GetCsvHeaderRequest withRequest(openapisdk.models.shared.GetCsvHeaderRequest request) {
        this.request = request;
        return this;
    }
}