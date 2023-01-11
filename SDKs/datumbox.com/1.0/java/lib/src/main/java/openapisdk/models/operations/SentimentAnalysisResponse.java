package openapisdk.models.operations;



public class SentimentAnalysisResponse {
    public String contentType;
    public SentimentAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SentimentAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}