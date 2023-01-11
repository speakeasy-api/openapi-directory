package openapisdk.models.operations;



public class KeywordSearchResponse {
    public String contentType;
    public KeywordSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.KeywordSearchResponse keywordSearchResponse;
    public KeywordSearchResponse withKeywordSearchResponse(openapisdk.models.shared.KeywordSearchResponse keywordSearchResponse) {
        this.keywordSearchResponse = keywordSearchResponse;
        return this;
    }
    public Long statusCode;
    public KeywordSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}