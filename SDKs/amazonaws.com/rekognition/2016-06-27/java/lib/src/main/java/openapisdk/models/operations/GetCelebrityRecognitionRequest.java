package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCelebrityRecognitionRequest {
    public GetCelebrityRecognitionQueryParams queryParams;
    public GetCelebrityRecognitionRequest withQueryParams(GetCelebrityRecognitionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCelebrityRecognitionHeaders headers;
    public GetCelebrityRecognitionRequest withHeaders(GetCelebrityRecognitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCelebrityRecognitionRequest request;
    public GetCelebrityRecognitionRequest withRequest(openapisdk.models.shared.GetCelebrityRecognitionRequest request) {
        this.request = request;
        return this;
    }
}