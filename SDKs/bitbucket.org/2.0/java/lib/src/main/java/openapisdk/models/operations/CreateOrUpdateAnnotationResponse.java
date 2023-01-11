package openapisdk.models.operations;



public class CreateOrUpdateAnnotationResponse {
    public String contentType;
    public CreateOrUpdateAnnotationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOrUpdateAnnotationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateOrUpdateAnnotationResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> reportAnnotation;
    public CreateOrUpdateAnnotationResponse withReportAnnotation(java.util.Map<String, Object> reportAnnotation) {
        this.reportAnnotation = reportAnnotation;
        return this;
    }
}