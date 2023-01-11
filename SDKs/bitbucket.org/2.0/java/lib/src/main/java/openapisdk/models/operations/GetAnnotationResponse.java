package openapisdk.models.operations;



public class GetAnnotationResponse {
    public String contentType;
    public GetAnnotationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnnotationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetAnnotationResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> reportAnnotation;
    public GetAnnotationResponse withReportAnnotation(java.util.Map<String, Object> reportAnnotation) {
        this.reportAnnotation = reportAnnotation;
        return this;
    }
}