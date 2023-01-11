package openapisdk.models.operations;



public class AdultContentDetectionResponse {
    public String contentType;
    public AdultContentDetectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdultContentDetectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}