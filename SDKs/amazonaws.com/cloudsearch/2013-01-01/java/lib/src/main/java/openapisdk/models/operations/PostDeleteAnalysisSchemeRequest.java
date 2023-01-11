package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAnalysisSchemeRequest {
    public PostDeleteAnalysisSchemeQueryParams queryParams;
    public PostDeleteAnalysisSchemeRequest withQueryParams(PostDeleteAnalysisSchemeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAnalysisSchemeHeaders headers;
    public PostDeleteAnalysisSchemeRequest withHeaders(PostDeleteAnalysisSchemeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAnalysisSchemeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}