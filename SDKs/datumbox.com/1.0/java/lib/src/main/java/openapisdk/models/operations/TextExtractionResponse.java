package openapisdk.models.operations;



public class TextExtractionResponse {
    public String contentType;
    public TextExtractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TextExtractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}