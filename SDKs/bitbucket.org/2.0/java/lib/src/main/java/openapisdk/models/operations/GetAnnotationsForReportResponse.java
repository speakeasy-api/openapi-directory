package openapisdk.models.operations;



public class GetAnnotationsForReportResponse {
    public String contentType;
    public GetAnnotationsForReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnnotationsForReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedAnnotations paginatedAnnotations;
    public GetAnnotationsForReportResponse withPaginatedAnnotations(openapisdk.models.shared.PaginatedAnnotations paginatedAnnotations) {
        this.paginatedAnnotations = paginatedAnnotations;
        return this;
    }
}