package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDefineAnalysisSchemeRequest {
    public PostDefineAnalysisSchemeQueryParams queryParams;
    public PostDefineAnalysisSchemeRequest withQueryParams(PostDefineAnalysisSchemeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDefineAnalysisSchemeHeaders headers;
    public PostDefineAnalysisSchemeRequest withHeaders(PostDefineAnalysisSchemeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDefineAnalysisSchemeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}