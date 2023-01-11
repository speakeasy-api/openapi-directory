package openapisdk.models.operations;



public class ChecksListAnnotationsResponse {
    public String contentType;
    public ChecksListAnnotationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChecksListAnnotationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChecksListAnnotationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckAnnotation[] checkAnnotations;
    public ChecksListAnnotationsResponse withCheckAnnotations(openapisdk.models.shared.CheckAnnotation[] checkAnnotations) {
        this.checkAnnotations = checkAnnotations;
        return this;
    }
}