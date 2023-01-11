package openapisdk.models.operations;



public class BulkCreateOrUpdateAnnotationsResponse {
    public String contentType;
    public BulkCreateOrUpdateAnnotationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BulkCreateOrUpdateAnnotationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] reportAnnotations;
    public BulkCreateOrUpdateAnnotationsResponse withReportAnnotations(java.util.Map<String, Object>[] reportAnnotations) {
        this.reportAnnotations = reportAnnotations;
        return this;
    }
}